import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import dashboardStyles from "../../styles/dashboardStyles";
import LeftSection from "./LeftSection";
import awesomebitcoin from "../../assets/svg/awesome-bitcoin.svg";
import TopNavigation from "../../components/shared/TopNavigation";
import { useHistory } from "react-router";
import { Space } from "../../components/ui/Space/Space";
const Dashboard = () => {
  const classes = dashboardStyles();
  const appTheme = useTheme()
  const [tabIndex, settabIndex] = useState(0);
  const history = useHistory();

  const handlesetTabIndex = (index: number) => {
    settabIndex(index);
  };
  return (
    <div className={classes.dashboardRoot}>
      <div className={classes.topCard}>
        <div>
          <small className="m-0">My Asset Portfolio</small>
          <h1 className="m-0">N0.00 </h1>
        </div>
        <div></div>
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
        <Grid item md={6} xs={12}>
          <div className={classes.rightCard} >
            <div className={classes.rightCardTop}>
              <div>
                <img src={awesomebitcoin} />
              </div>
            </div>
            <Space top={30}/>
            <div >
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
                  component: <div>Send</div>,
                },
                {
                  index: 1,
                  component: <div>Deposit</div>,
                },
                {
                  index: 2,
                  component: <div>Transfer</div>,
                },
                {
                  index: 3,
                  component: <div>Transfer History</div>,
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
