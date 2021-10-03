import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState,useRef} from "react";
import dashboardStyles from "../../styles/dashboardStyles";
import LeftSection from "./LeftSection";
import awesomebitcoin from "../../assets/svg/awesome-bitcoin.svg";
import TopNavigation from "../../components/shared/TopNavigation";
import { useHistory } from "react-router";
import { Space } from "../../components/ui/Space/Space";
import Send from "./Send";
import clsx from "clsx";

type filterType = "USD" | "NGN"
const Dashboard = () => {
  const classes = dashboardStyles();
  const appTheme = useTheme();
  const [tabIndex, settabIndex] = useState(0);
  const history = useHistory();
  const [type, settype] = useState<filterType>("USD");
  const containerRef = useRef(null);
  const handlesetTabIndex = (index: number) => {
    settabIndex(index);
  };

  const handleSetType = (type:filterType)=>{
      settype(type)
  }
  return (
    <div className={classes.dashboardRoot}>
      <div className={classes.topCard}>
        <div className={classes.topCardContents}>
          <div>
            <small className="m-0">My Asset Portfolio</small>

            <p className="m-0 d-flex">
              <h1>N0.00</h1> <label className="ms-2">NGN</label>
            </p>
          </div>
          <div  className={classes.topCardContentsRight}>
            <div
            onClick={()=>handleSetType('USD')}
              className={clsx(
                type === "USD"
                  ? classes.topCardContentsRightButtonSelected
                  : classes.topCardContentsRightButtonNotSelected
              )}
            >
              <label>USD</label>
            </div>
            <div
            onClick={()=>handleSetType('NGN')}
              className={clsx(
                type === "NGN"
                  ? classes.topCardContentsRightButtonSelected
                  : classes.topCardContentsRightButtonNotSelected
              )}
            >
              <label>NGN</label>
            </div>
          </div>
        </div>
      </div>

      <Grid container spacing={2} className="mt-3">
        <Grid item md={6} xs={12}>
          <div className={classes.leftCard}>
            <div className="d-flex">
              <div className="ms-4 mt-4 mb-2">
                <Typography className="mt-1">
                  <b>Wallet</b>
                </Typography>
              </div>
              <div></div>
            </div>
            <LeftSection />
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="mb-4">
          <div className={classes.rightCard}>
            <div className={classes.rightCardTop}>
              <div>
                <img src={awesomebitcoin} />
              </div>
              <div className={classes.rightCardTopText}>
                <p className="mb-0">
                  <b>
                    <small>Total Wallet Balance</small>
                  </b>
                </p>
                <h3>0.0000000 BTC</h3>
              </div>
            </div>
            <Space top={30} />
            <div>
              <TopNavigation
                id={tabIndex}
                handlesetTabIndex={handlesetTabIndex}
                history={history}
                showBottomBorder={false}
                backgroundColor={appTheme.palette.grey[200]}
                tabs={[
                  {
                    label: "Send",
                    index: 0,
                    hidden: false,
                  },
                  {
                    label: "Deposit",
                    index: 1,
                    hidden: false,
                  },
                  {
                    label: "Transfer",
                    index: 2,
                    hidden: false,
                  },
                  {
                    label: "Trans History",
                    index: 3,
                    hidden: false,
                  },
                ]}
                tabPanels={[
                  {
                    index: 0,
                    component: <Send />,
                  },
                  {
                    index: 1,
                    component: <div className="m-3">Deposit</div>,
                  },
                  {
                    index: 2,
                    component: <div className="m-3">Transfer</div>,
                  },
                  {
                    index: 3,
                    component: <div className="m-3">Transfer History</div>,
                  },
                ]}
                tabIndex={tabIndex}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
