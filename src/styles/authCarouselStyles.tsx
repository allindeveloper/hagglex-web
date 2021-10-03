import {  Theme } from "@mui/material";
import { makeStyles ,createStyles} from '@mui/styles';
import { linkColor } from "../theme/default";


const authCarouselStyles = makeStyles((theme: Theme) =>
    createStyles({
      indicatorsRoot:{
        display:'flex',
        justifyItems:'center',
        justifyContent:'center',
        color:'white',
        position:'relative',
        bottom:'-30px',
        marginTop:`${theme.spacing(-4)} !important`,
        
      },
      carouselRoot:{
        '& img':{
          width:'45% !important'
        },
        '& h3':{
          marginTop:15,
          marginBottom:15
        },
        '& p':{
          lineHeight:2,
          fontSize:14,
          marginLeft:100,
          marginRight:100,
          marginBottom:30
        }
      },
      circlesRoot:{
        display:'flex',
        justifyContent:'space-around',
        marginTop:5,
        marginLeft:5,
        marginRight:5
      },
      activeCircle:{
        marginRight:8,
        marginLeft:8,
        borderRadius:85,
        height:7,
        width:7,
        backgroundColor:theme.palette.secondary.contrastText,
        opacity:0.5,
        padding:8,
        cursor:'pointer'
      },
      inactiveCircle:{
        marginRight:8,
        marginLeft:8,
        borderRadius:85,
        height:7,
        width:7,
        backgroundColor:theme.palette.secondary.light,
        padding:8,
        cursor:'pointer'
      }
    }),
);
export default authCarouselStyles