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
        marginTop:`${theme.spacing(-4)} !important`
      }
    }),
);
export default authCarouselStyles