import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const customInputStyle = makeStyles((theme:Theme) => ({
    root: {
        marginBottom:'0px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            background:'transparent',
          boxShadow:'0px 4px 10px 3px rgba(0, 0, 0, 0.11)'
        },
    },
    textField:{
        
    },
    inputErrorContainer:{
        display:'flex',
        marginTop:'-7px'
    },
    multilineInput:{
        paddingLeft:'15px',
    },
    input:{
        paddingLeft:'15px !important',
        paddingTop:'17px !important',
        paddingBottom:'17px !important',
        [theme.breakpoints.down("xl")]: {
            // width:300
          },
    },
    inputLabel:{
        fontSize:12,
        fontWeight:400,
        position:'absolute',
        marginTop:'-8px',
        textTransform:'capitalize'
    },
    notchedOutline:{
        top:0
    },
    formControl:{
        // width:'100%'
    },
    endIcon:{
        marginTop: '-52px',
        position: 'absolute',
        right: '7px',
        cursor: 'pointer'
    },
    errorLabel:{
        color:theme.palette.warning.main,
        marginLeft:5
    },
    inputerrorIcon:{
        marginTop:-1
    },
    inputContainer:{
        marginBottom:'15px',
    }
}));

export default customInputStyle;