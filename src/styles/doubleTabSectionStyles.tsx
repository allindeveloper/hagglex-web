import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import yellowheader from "../assets/images/yellowheader.png";
import { textBrown } from "../theme/default";

const doubleTabSectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     borderRadius:5,
     boxShadow:'0px 3px 50px #00000021',
     height:500,
    },
    tabHeaderRoot:{
      cursor:'pointer',
      '& p':{
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15,
        marginBottom:0,
        letterSpacing:0,
        textTransform:'uppercase',
        color:theme.palette.primary.main,
      }
    },
    tabHeaderFirstSelected:{
      borderTopLeftRadius:5,
      backgroundColor:theme.palette.primary.light
    },
    tabHeaderSecondSelected:{
      borderTopRightRadius:5,
      backgroundColor:theme.palette.primary.light
    },
    tabHeaderFirstNotSelected:{
      borderTopLeftRadius:5,
      backgroundColor:theme.palette.primary.contrastText,
     
    },
    tabHeaderSecondNotSelected:{
      borderTopRightRadius:5,
      backgroundColor:theme.palette.primary.contrastText,
      '& p':{
        color:theme.palette.grey[500]
      }
    },
    components:{
      marginLeft:30,
      marginTop:20,
      marginRight:30
    }
  })
);
export default doubleTabSectionStyles;
