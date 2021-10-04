import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const customInputStyle = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: "0px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      background: "transparent",
      borderBottom: "none !important",
    },
    "&:after": {
      borderBottom: "1px solid #BA3AF9 !important",
    },
    marginTop: "-10px !important",
  },
  inputFocused: {
    borderBottom: "1px solid #BA3AF9",
  },
  noStyles: {
    margin: 0,
    "&:after": {
        borderBottom: "none !important",
      },
  },
  inputErrorContainer: {
    marginTop: "-7px",
  },
  multilineInput: {
    paddingLeft: "15px",
  },
  input: {
    paddingLeft: "8px !important",
    paddingTop: "13px !important",
    paddingBottom: "10px !important",
    [theme.breakpoints.down("xl")]: {
    },
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 400,
    position: "absolute",
    marginTop: "-8px",
    textTransform: "capitalize",
  },
  notchedOutline: {
    top: 0,
  },
  formControl: {
    // width:'100%'
  },
  endIcon: {
    marginTop: "-52px",
    position: "absolute",
    right: "7px",
    cursor: "pointer",
  },
  errorLabel: {
    color: theme.palette.warning.main,
    marginLeft: 5,
  },
  inputerrorIcon: {
    marginTop: -1,
  },
  inputContainer: {
    marginBottom: "5px",
  },
}));

export default customInputStyle;
