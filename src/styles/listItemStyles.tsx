import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { linkColor, textBrown } from "../theme/default";

const listItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemRoot: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 13,
      marginBottom: 13,
      paddingRight: 60,
      letterSpacing: 0,

      paddingLeft: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        paddingRight: 20,
      },
      "&:hover": {
        backgroundColor: "#F2F2F2",
        cursor: "pointer",
      },
      "&:last-child:hover": {
        borderBottomLeftRadius: theme.spacing(1.5),
        borderBottomRightRadius: theme.spacing(1.5),
        paddingBottom:20
      },
      "&:last-child": {
       paddingBottom:20
      },
      "& p": {
        fontSize: 16,
        fontWeight: 400,
      },
      "& img": {
        width: "75%",
      },
    },
    listItemRight: {
      textAlign: "right",
      "& p": {
        color: linkColor,
      },
    },
  })
);
export default listItemStyles;
