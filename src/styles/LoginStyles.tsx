import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { linkColor } from "../theme/default";

const LoginStyles = makeStyles((theme:Theme) => ({

  container: {
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      height: '100%',
      position: 'relative'
    },
    overflowX:'hidden',
    width: "100%",
    WebkitOverflowScrolling:'touch',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  forgotpasswordText:{
    color:theme.palette.primary.main,
    '& b':{
      fontWeight:600
    }
  },
  
  logotypeContainer: {
    // background: 'rgb(46,25,99)',
    background: 'linear-gradient(90deg, rgba(46,25,99,1) 24%, rgba(79,56,138,1) 100%, rgba(67,43,123,1) 100%)',
    backgroundSize: 'cover',
    width: "53%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color:theme.palette.primary.contrastText,
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    '& .carousel-slider':{
      overflow:'inherit !important',
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    '& img':{
      width:'50% !important'
    }
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
  },
  loginwriteupcontainer: {
    marginLeft:theme.spacing(12),
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  formContainer: {
    backgroundColor:theme.palette.primary.main,
    width: "47%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      backgroundColor:theme.palette.primary.contrastText,
      width: "50%",
    },
  },
  topLeftSquare:{
    position:'absolute',
    borderRadius:theme.spacing(2),
    height:100,
    width:100,
    right:'37%',
    top: '4%',
    backgroundColor:theme.palette.secondary.main,
    opacity:0.2,
    [theme.breakpoints.down("md")]: {
      display:'none'
    } 
  },
  bottomRightSquare:{
    position:'absolute',
    borderRadius:theme.spacing(2),
    height:200,
    width:200,
    right:'2%',
    bottom: '2%',
    backgroundColor:theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      display:'none'
    }  
  },
  signupform: {
    width: '74%',
    zIndex:10,
    position:'relative',
    backgroundColor:theme.palette.primary.contrastText,
    paddingLeft:theme.spacing(10),
    paddingRight:theme.spacing(10),
    borderRadius:theme.spacing(1.5),
    paddingBottom:theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      maxWidth: 320,
      minWidth: '160%',
      marginTop: '50%',
      paddingTop:'0 !important',
      paddingLeft:'0 !important',
      paddingRight:'0 !important',
    },
    [theme.breakpoints.down('xl')]:{
    paddingTop:theme.spacing(0),
    paddingBottom:theme.spacing(5),
    paddingLeft:theme.spacing(7),
    paddingRight:theme.spacing(7),
    },
   [theme.breakpoints.down("xs")]: {
      maxWidth: '100%',
      paddingTop:0,
      paddingLeft:0,
      paddingRight:0
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: '20%',
    },
  },
  signinform:{
    width: '65%',
    marginTop: '0%',
    [theme.breakpoints.down("md")]: {
      maxWidth: 320,
      minWidth: '160%',
      marginTop: '50%'
    },
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  countryCode: {
    paddingLeft: '15px'
  },
  signupBackContainer:{
    position: 'absolute',
    display:'flex',
    cursor:'pointer',
    top: '0px',
    left: '50%',
    padding: '50px',
    [theme.breakpoints.down("md")]: {
      left:'5%',
      marginTop:'20px',
      padding:0
    },
  },
  business:{
    fontSize:'20px !important',
    fontWeight:'bold'
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`,
      boxShadow: '0px 4px 10px 3px rgba(0, 0, 0, 0.11)'
    },
  },
  gotReferralCode: {
    cursor:'pointer',
    color:theme.palette.primary.main,
    '& b':{
      fontWeight:600,
      fontSize:13
    }
  },
  needHelp:{
    '& small':{
      color:theme.palette.primary.main,
      fontWeight:600
    }
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  loginLogoContainer:{
    display:'flex',
    paddingLeft:theme.spacing(12),
    paddingTop:theme.spacing(3.5),
    position: 'absolute',
    top: '0px',
    left: '0px',
    padding: '46px'
},
countryCodeInput:{
  backgroundColor:theme.palette.primary.light,
  borderColor:'transparent',
  '& fieldset':{
    top:'-1px !important',
    borderColor:'transparent',
  }
},
countryCodeInputTextField: {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',            
  paddingBottom: 0,
  marginTop: 0,
  fontWeight: 500
},
}));
export default LoginStyles