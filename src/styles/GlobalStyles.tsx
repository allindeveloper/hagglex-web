import { createStyles, Theme } from "@mui/material";
import { makeStyles } from '@mui/styles';


const GlobalStyles = makeStyles((theme: Theme) =>
    createStyles({
      selectRootPagination:{
        position:'absolute',
        left:'164px',
        '@media only screen and (max-width:600px)': {
          position:'absolute',
        left:'154px',
        }
      },
        proceedText:{
            '& label':{
              // color:linkColor,
              cursor:'pointer',
              margin:0,
              fontSize:14,
              fontWeight:400
            }
          },
          
    }),
);
export default GlobalStyles