import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { linkColor, textBrown } from "../theme/default";

const listItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemRoot:{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      marginTop:13,
      marginBottom:13,
      paddingRight:60,
      letterSpacing:0,
      paddingLeft:theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        paddingRight:20
      },
      '&:hover': {
        backgroundColor:theme.palette.grey[200],
        cursor:'pointer'
    },
      '& p':{
        fontSize:16,
        fontWeight:400,
      },
      '& img':{
        width:'75%'
      }
    },
    listItemRight:{
      textAlign:'right',
      '& p':{
        color:linkColor,
      },
    }
  })
);
export default listItemStyles;
