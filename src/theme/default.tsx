import tinycolor from "tinycolor2";

export const primary = "#2E1963";
export const lightPrimary = "#F0EBFF";
const secondary = "#4F388A";
const warning = "#EA3223";
const success = "#49B621";
const info = "rgba(24, 25, 31, 0.5)s";
export const linkColor = '#2E1963'
export const lightenRate = 7.5;
const darkenRate = 15;
export const lightGrey = '#797979';
export const textBrown = '#562121';
export const defaultYellow = '#FFC31A';
export const white = '#ffffff'
export default {
  palette: {
    primary: {
      main: primary,
      light: lightPrimary,
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString(),
      
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: lightGrey,
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString(),
    },

  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none !important',
          color:primary,
          '&:hover':{
              color:tinycolor(primary)
              .lighten(50)
          }
        },
      },
    },
    typography: {
      fontSize: 13,
      '@media (min-width:1680px)': {
        fontSize: 15,
      },
      caption:{
        color:lightGrey,
        fontSize:'14px'
      },
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Inter',
        'Roboto',
      ].join(','),
      
    },
   
   
  },
};
