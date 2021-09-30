import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


const customIconStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            fontSize:'14px',
            display:'flex',
            justifyContent:'center'
        }
    }),
);
export default customIconStyles