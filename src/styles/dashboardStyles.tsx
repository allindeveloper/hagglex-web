import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import yellowheader from "../assets/images/yellowheader.png";
import { textBrown } from "../theme/default";

const dashboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    dashboardRoot: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    topCard: {
      paddingTop:theme.spacing(3),
      paddingBottom:theme.spacing(1.5),
      paddingLeft:theme.spacing(4.5),
      paddingRight:theme.spacing(3),
      backgroundImage: `url(${yellowheader})`,
      backgroundSize: "cover",
      borderRadius:7,
      color:textBrown,
      fontWeight:'bold',
      '& h1':{
        fontWeight:'bold',
      }
    },

    leftCard:{
      borderRadius:theme.spacing(0.5),
      backgroundColor:theme.palette.primary.contrastText,
    },
    rightCard:{
      borderRadius:theme.spacing(0.5),
      backgroundColor:theme.palette.primary.contrastText,
    }
  })
);
export default dashboardStyles;
