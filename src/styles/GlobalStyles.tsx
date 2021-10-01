import {  Theme } from "@mui/material";
import { makeStyles ,createStyles} from '@mui/styles';
import { linkColor } from "../theme/default";


const GlobalStyles = makeStyles((theme: Theme) =>
    createStyles({
      '@global': {
        a:{
          color:linkColor,
          fontWeight:'bold'
        },
        
      },
      selectRootPagination:{
        position:'absolute',
        left:'164px',
        '@media only screen and (max-width:600px)': {
          position:'absolute',
        left:'154px',
        }
      }
    }),
);
export default GlobalStyles