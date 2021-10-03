import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const customInputStyle = makeStyles((theme:Theme) => ({
    root: {
        marginBottom:'0px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            background:'transparent',
        //   boxShadow:'0px 4px 10px 3px rgba(0, 0, 0, 0.11)'
        },
        marginTop:'-10px !important'
        // '& fieldset':{
        //     marginTop:10
        // }
    },
    textField:{
        
    },
    noStyles:{
        margin:0
    },
    inputErrorContainer:{
        marginTop:'-7px'
    },
    multilineInput:{
        paddingLeft:'15px',
    },
    input:{
        paddingLeft:'8px !important',
        paddingTop:'13px !important',
        paddingBottom:'10px !important',
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
        marginBottom:'5px',
    }
}));

export default customInputStyle;