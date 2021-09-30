import {  Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { drawerWidth } from "../constants/appConstants";

const wrapperStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
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
        },
        content: {
            flexGrow: 1,
            overflowX:'auto',
            paddingTop: theme.spacing(5),
            marginTop:theme.spacing(3),
            [theme.breakpoints.down("md")]: {
                marginTop:theme.spacing(4.1)
              },
        },
    }),
);
export default wrapperStyles