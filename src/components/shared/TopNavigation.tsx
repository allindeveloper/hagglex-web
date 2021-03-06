import React, { useEffect } from "react";
import { Tabs, Box, Theme } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { ITabPanels, ITabs } from "../../types/TopNavigation";
import { TabProps } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import { defaultYellow, linkColor } from "../../theme/default";

const AntTabs = withStyles((theme: Theme) => ({
  root: {
    borderBottom: "1px solid #e8e8e8",
    paddingLeft: theme.spacing(3),
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `5px solid ${defaultYellow} !important`,
    // marginLeft: -5
  },
}))(Tabs);

const AntTab = withStyles((theme: Theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: 0,
    fontSize: 20,

    "&:hover": {
      color: `${theme.palette.primary.main} !important`,
      opacity: 0.3,
    },
    "& .Mui-disabled": {
      fontSize: 30,
    },
    "&$selected": {
      color: `${linkColor} !important`,
      fontWeight: 600,
    },
    "&:focus": {
      color: theme.palette.primary.light,

      outline: "none",
    },
  },

  selected: {},
  disabled: {
    fontSize: 30,
  },
}))((props: TabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {},
  demo1: {
    height: "100%",
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;
  const realValue = parseInt(value);
  const realIndex = parseInt(index);
  return (
    <div
      role="tabpanel"
      hidden={realValue !== realIndex}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {realValue === realIndex && (
        <Box>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
interface TopNavigationProps {
  tabsRoutes?: string[];
  id?: number | null;
  handlesetTabIndex?: (index: number) => void;
  updateId?: (index: number) => void;
  tabs?: ITabs[];
  tabPanels?: ITabPanels[];
  tabIndex?: number;
  history?: any;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  showBottomBorder?: boolean;
}
const TopNavigation = (props: TopNavigationProps) => {
  const classes = useStyles();

  let showScrollButton: "auto" | "desktop" | "on" | "off" = "off";
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    showScrollButton = "on";
  }

  const setTab = (index: any) => {
    props.handlesetTabIndex?.(index);
  };

  const renderAntTabs = (tabs: ITabs[]) => {
    const arr = [];
    for (let i in tabs) {
      let hidden = tabs[i].hidden;
      let label = tabs[i].label;
      arr.push(<AntTab hidden={hidden} key={i} label={label} />);
    }
    return arr;
  };

  const renderTabPanels = (tabPanels: ITabPanels[]) => {
    const arr = [];
    for (let i in tabPanels) {
      arr.push(
        <TabPanel value={props.tabIndex} key={i} index={tabPanels?.[i].index}>
          {tabPanels?.[i].component}
        </TabPanel>
      );
    }
    return arr;
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs
          value={props.tabIndex}
          onChange={(e, index) => setTab(index)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="tabs"
          style={{
            border: props.showBottomBorder ? 0 : "",
            backgroundColor: props.backgroundColor,
          }}
        >
          {props.tabs && renderAntTabs(props.tabs)}
        </AntTabs>

        {props.tabPanels && renderTabPanels(props.tabPanels)}
      </div>
    </div>
  );
};
export default TopNavigation;
