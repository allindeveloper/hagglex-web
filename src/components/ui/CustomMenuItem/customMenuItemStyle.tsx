import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const customMenuItemStyle = makeStyles((theme:Theme) => ({
    parentDiv:{
        marginLeft: '10px',
        marginRight: '10px',
        marginTop:'5px',
        // '&:hover': {
        //     backgroundColor:'rgba(209, 209, 210, 1)',
        //     color:'#18191F80',
        //     opacity:0.8,
        //     '& i':{
        //         color:'rgba(24, 25, 31, 0.5)',
        //     }
        //   },
    },
    selected:{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.secondary.contrastText,
        '& span':{
            fontWeight:'bold',
        },
        '& i':{
            color:theme.palette.secondary.contrastText,
        }
    },
    sideItem:{
        '&:hover': {
            backgroundColor:theme.palette.primary.light,
            // opacity:0.7,
            borderRadius:theme.spacing(1),
            '& span':{
                color:theme.palette.primary.main
            }
          },
        '& i':{
            marginTop:'2px'
        }
    },
    root: {
        borderTopLeftRadius:'20px',
        borderBottomRightRadius:'20px',
        '&:hover': {
            backgroundColor:'transparent !important'
            // backgroundColor:'rgba(209, 209, 210, 1)',
            // color:'#18191F80',
            // opacity:0.8,
            // '& i':{
            //     color:'rgba(24, 25, 31, 0.5)',
            // }
          },
        '& i':{
            marginTop:'2px'
        }
    },
    menuIcon:{
        fontSize:'18px',
    }
    
}));

export default customMenuItemStyle;