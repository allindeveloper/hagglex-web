import {  Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { drawerWidth } from "../constants/appConstants";

const topnavStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor:theme.palette.primary.contrastText,
            color:theme.palette.primary.dark,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        statusTextChip:{
            backgroundColor:`rgba(105, 181, 120, 1) !important`,
            marginRight:`24px !important`,
            borderRadius:'8px !important',
            color:`${theme.palette.primary.contrastText} !important`
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            minWidth: 185,
            '& span':{
                paddingLeft:theme.spacing(2),
                paddingTop:theme.spacing(0.5),
                paddingBottom:theme.spacing(0.5)
            },
        },
        userMenu: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: 24,
            padding: 4,
            '& span': {
                margin: '0 8px',
                fontSize:15
                // color: palette.text.secondary
            },
        },
        pageDescription:{
            paddingLeft:theme.spacing(3),
            paddingBottom:theme.spacing(1.5),
            marginTop:theme.spacing(2),
        }
    }),
);
export default topnavStyles