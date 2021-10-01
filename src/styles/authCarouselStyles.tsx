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
      }
    }),
);
export default authCarouselStyles