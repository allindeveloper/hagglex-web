import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import yellowheader from "../assets/images/yellowheader.png";
import { textBrown } from "../theme/default";

const dashboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    dashboardRoot: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    topCard: {
      paddingTop:theme.spacing(3),
      paddingBottom:theme.spacing(1.5),
      paddingLeft:theme.spacing(4.5),
      paddingRight:theme.spacing(3),
      backgroundImage: `url(${yellowheader})`,
      backgroundSize: "cover",
      borderRadius:7,
      color:textBrown,
      fontWeight:'bold',
      '& h1':{
        fontWeight:'bold',
        fontSize:50
      }
    },
    topCardContents:{
      display:'flex',
      justifyContent:'space-between',
      flexWrap:'wrap',
      alignItems:'center',
      '& section':{
        '& label':{
          fontWeight:400
        }
      }
    },
    topCardContentsRight:{
      backgroundColor:theme.palette.primary.contrastText,
      borderRadius:50,
      height:'100%',
      padding:'2.5px 12px 2.5px 12px',
      boxShadow:'0px 3px 6px #00000029',
      display:'flex',
      textAlign:'center',
      justifyContent:'space-between',
      cursor:'pointer',
      opacity:1,
      transition:'opacity  1s linear*',
      '& label':{
        marginLeft:24,
        marginRight:24,
        marginTop:10,
        marginBottom:10,
        cursor:'pointer',
      }
    },
    topCardContentsRightButtonNotSelected:{
      margin:'auto',
      cursor:'pointer',
      '& label':{
        fontWeight:300
      }
    },
    topCardContentsRightButtonSelected:{
      cursor:'pointer',
      boxShadow:'0px 3px 6px #00000029',
      border:'1px solid #FFFFFF',
      borderRadius:40,
      height:50,
      padding:'1px 10px 1px 10px',
      '& label':{
        marginTop:12,
      },
      background:'#FFC175 0% 0% no-repeat padding-box'
    },
    leftCard:{
      borderRadius:theme.spacing(1.5),
      backgroundColor:theme.palette.primary.contrastText,
    },
    listsStatsFilter:{
      background:'#F9F9F9 0% 0% no-repeat padding-box',
      borderRadius:5,
      height:50,
      display:'flex',
      justifyContent:'space-between'
    },
    listFilterPicked:{
      // width:0,
    
      marginLeft:4,
      marginRight:10,
      margin:'auto',
      background:'#F9F9F9 0% 0% no-repeat padding-box',
      boxShadow:'0px 3px 6px #00000029',
      fontWeight:'bold',
      borderRadius:5,
      '& label':{
        cursor:'pointer',
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:25,
        paddingRight:25,
      }
    },
    listFilterNotPicked:{
      margin:'auto',
      '& label':{
        cursor:'pointer',
        color:theme.palette.grey[500],
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:20,
        paddingRight:20,
      }
    },
    rightCard:{
      borderRadius:theme.spacing(1.5),
      backgroundColor:theme.palette.primary.contrastText,
      height:'100%',
      paddingTop:theme.spacing(3),
    },
    rightCardTopText:{
      color:textBrown,
      marginLeft:20
    },
    rightCardTop:{
      display:'flex',
      justifyContent:'flex-start',
      backgroundImage: `url(${yellowheader})`,
      backgroundSize: "cover",
      height:120,
      borderRadius:7,
      paddingLeft:10,
      paddingTop:15,
      marginLeft:theme.spacing(4.5),
      marginRight:theme.spacing(3),
      '& img':{
        backgroundColor:theme.palette.primary.contrastText,
        borderRadius:50,
        padding:7
      },
      [theme.breakpoints.down("md")]: {
        marginLeft:theme.spacing(3),
        paddingRight:10
      },
    }
    ,
    leftCardContent:{
      borderBottomLeftRadius:theme.spacing(1.5),
      borderBottomRightRadius:theme.spacing(1.5),
    },
    availableEscrow:{
      background:'#FFFFFF 0% 0% no-repeat padding-box',
      borderRadius:15,
      paddingLeft:10,
      paddingRight:10,
      '& p':{
        fontSize:13,
        fontWeight:500
      }
    }
    // Send
,
    sendRoot:{
      marginTop:theme.spacing(3),
      marginLeft:theme.spacing(4.5),
      marginRight:theme.spacing(3),
      marginBottom:theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        marginLeft:theme.spacing(3),
        marginRight:theme.spacing(3),
      },
    },
    sendOnly:{
      backgroundColor:theme.palette.primary.light,
      opacity:1,
      display:'flex',
      justifyContent:'flex-start',
      marginLeft:50,
      marginTop:15,
      marginRight:50,
      borderRadius:20,
      paddingTop:4,
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:4,
      alignItems:'center',
      [theme.breakpoints.down("sm")]: {
        margin: '10px 10px 10px 10px',
        '& small':{
          fontSize:12
        }
      },
      '& small':{
        color:theme.palette.primary.main,
      }
    },
    componentOneRoot:{
      '& p':{
        color:'#000000',
      },
      '& ol':{
        '& li':{
          listStyleType:'disc'
        },
        '& small':{
          fontSize:11
        }
      }
    },
    sendTo:{
       color:'#000000',
       fontWeight:600,
       marginBottom:0,
       fontSize:16 
    },
   
  })
);
export default dashboardStyles;
