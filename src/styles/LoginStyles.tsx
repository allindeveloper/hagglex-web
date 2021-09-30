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
    float:'right',
    marginTop:'-15px',
    '& label':{
      textDecoration:'underline',
      color:linkColor,
      cursor:'pointer',
      margin:0,
      fontSize:12,
    }
  },
  resendEmailText:{
    '& label':{
      color:linkColor,
      cursor:'pointer',
      margin:0,
      fontSize:14,
      fontWeight:400
    }
  },
  proceedText:{
    '& label':{
      color:linkColor,
      cursor:'pointer',
      margin:0,
      fontSize:14,
      fontWeight:400
    }
  },
  loginbottomleftimage: {
    position: 'absolute',
    left: '0px',
    bottom: '0px'
  },
  logincurlyquote: {
    marginBottom: '40px'
  },
  loginbottomrightimage: {
    position: 'absolute',
    right: '50%',
    bottom: '0px'
  },
  loginrightangle: {
    position: 'absolute',
    right: '60%',
    top: '65%',
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
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4),
  },
  logindots: {
    right: '67%',
    top: '20%',
    position: 'absolute',
    marginBottom: '40px'
  },
  loginwriteup: {
    color: '#fff',
    lineHeight: '38px'
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
  signupform: {
    width: '65%',
    position:'relative',
    backgroundColor:theme.palette.primary.contrastText,
    paddingLeft:theme.spacing(10),
    paddingRight:theme.spacing(10),
    paddingTop:theme.spacing(13),
    paddingBottom:theme.spacing(8),
    borderRadius:theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      maxWidth: 320,
      minWidth: '160%',
      marginTop: '50%',
      paddingTop:0,
      paddingLeft:0,
      paddingRight:0

    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: '100%',
      paddingTop:0,
      paddingLeft:0,
      paddingRight:0
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
  noaccount: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '46px'
  }
  ,
  lockText: {
    textTransform: 'uppercase',
    marginLeft: '10px',
    [theme.breakpoints.down("md")]: {
      marginLeft: 0
    },
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
  steps: {
    textAlign:'end',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '25px',
    '& span:first-child':{
      fontSize:'17px'
    },

    '& p':{
      margin:0
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
  textField: {
    // borderBottomColor: theme.palette.background.light,
    "&:hover:before": {
      boxShadow: '0px 4px 10px 3px rgba(0, 0, 0, 0.11)'
    },
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(2),
    },
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
loginlogoText:{
    color:theme.palette.primary.contrastText,
    fontSize:18,
    marginTop:8,
    marginLeft:5
},

}));
export default LoginStyles