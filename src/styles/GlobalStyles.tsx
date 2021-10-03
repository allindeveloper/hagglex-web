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
        hr:{
          '& .MuiDivider-light':{
            backgroundColor:'#F3F3F3'
          }
          // backgroundColor:'#F3F3F3'
        }
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