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
     
    }),
);
export default authCarouselStyles