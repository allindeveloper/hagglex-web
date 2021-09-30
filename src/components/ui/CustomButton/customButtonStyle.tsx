import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import tinycolor from 'tinycolor2'
const customButtonStyle = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2.2),
        color: '#ffffff !important',
        fontWeight: theme.typography.fontWeightBold,
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: 10,
        fontSize: 17,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        background: 'linear-gradient(90deg, rgba(67,43,123,1) 24%, rgba(106,75,188,1) 61%, rgba(106,75,188,1) 100%)',
        '&:hover': {
            opacity:0.8
        },
    },
    default: {
        backgroundColor: theme.palette.primary.contrastText,
        border: `1.3px solid ${theme.palette.primary.main} !important`,
        color: tinycolor(theme.palette.primary.main).lighten(30),
        fontWeight: 400,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
        },
    },
    disabled: {
        color: '#ffffff !important',
        backgroundColor: `${theme.palette.primary.main} !important`,
        opacity: 0.8
    },
    enabled: {
        backgroundColor: 'linear-gradient(90deg, rgba(67,43,123,1) 24%, rgba(106,75,188,1) 61%, rgba(106,75,188,1) 100%)',
        color: `${theme.palette.primary.contrastText} !important`,
        opacity: 1
    },
    label: {
    }
}))

export default customButtonStyle;