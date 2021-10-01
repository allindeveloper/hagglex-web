import {  Theme } from "@mui/material";
import { createStyles ,makeStyles} from "@mui/styles";
import { drawerWidth } from "../constants/appConstants";


const sidenavStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('xl')]: {
                display:'flex'
            },
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
            '@media only screen and (max-width:600px)': {
               display:'none'
              }
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        logoContainer:{
            display:'flex',
            paddingLeft:theme.spacing(4),
            paddingTop:theme.spacing(2.5),
            position:'absolute'
        },
        logoText:{
            color:theme.palette.primary.main,
            fontSize:18,
            marginTop:8,
            marginLeft:5
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            borderRight:'1px solid transparent !important',
            backgroundColor:'#FAFAFB',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);
export default sidenavStyles