import { createTheme, responsiveFontSizes } from "@mui/material";
import defaultTheme from "./default";


let theme = createTheme({ ...defaultTheme, ...defaultTheme.overrides })
export default {
  default: responsiveFontSizes(theme),
};
