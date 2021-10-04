import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState, useRef } from "react";
import dashboardStyles from "../../styles/dashboardStyles";
import LeftSection from "./LeftSection";
import awesomebitcoin from "../../assets/svg/awesome-bitcoin.svg";
import TopNavigation from "../../components/shared/TopNavigation";
import { useHistory } from "react-router";
import { Space } from "../../components/ui/Space/Space";
import Send from "./Send";
import clsx from "clsx";
type currencyType = "USD" | "NGN";
type walletType = "LIST" | "STATS";
const Dashboard = () => {
  const classes = dashboardStyles();
  const appTheme = useTheme();
  const [tabIndex, settabIndex] = useState(0);
  const history = useHistory();
  const [currency, setcurrency] = useState<currencyType>("NGN");
  const [walletcat, setwalletcat] = useState<walletType>("LIST");

  const containerRef = useRef(null);
  const handlesetTabIndex = (index: number) => {
    settabIndex(index);
  };

  const handleSetType = (currency: currencyType) => {
    setcurrency(currency);
  };

  const handleSetWalletCat = (walletcat:walletType) =>{
    setwalletcat(walletcat)
  }
  return (
    <div className={classes.dashboardRoot}>
      <div className={classes.topCard}>
        <div className={classes.topCardContents}>
          <div>
            <small className="m-0">My Asset Portfolio</small>

            <section className="m-0 d-flex">
              <h1>N0.00</h1> <label className="ms-2">NGN</label>
            </section>
          </div>
          <div className={classes.topCardContentsRight}>
            <div
              onClick={() => handleSetType("USD")}
              className={clsx(
                currency === "USD"
                  ? classes.topCardContentsRightButtonSelected
                  : classes.topCardContentsRightButtonNotSelected
              )}
            >
              <label>USD</label>
            </div>
            <div
              onClick={() => handleSetType("NGN")}
              className={clsx(
                currency === "NGN"
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
            <div className="d-flex justify-content-between">
              <div className="ms-4 mt-4 mb-2">
                <Typography className="mt-1" component="h5">
                  <p><b>Wallet</b></p>
                </Typography>
              </div>
              <div className={classes.listsStatsFilter.concat(" me-4 mt-4")}>
                <div
                onClick={() => handleSetWalletCat("LIST")}
                className={clsx(walletcat === "LIST"?classes.listFilterPicked:classes.listFilterNotPicked)}>
                  <label>
                    <small>List</small>
                  </label>
                </div>
                <div 
                onClick={() => handleSetWalletCat("STATS")}
                className={clsx(walletcat === "STATS"?classes.listFilterPicked:classes.listFilterNotPicked)}>
                  <label>
                    <small>Stats</small>
                  </label>
                </div>
              </div>
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
                <div className={classes.availableEscrow}>
                  <p>
                    <small>Available Escrow wallet: 0.000000BTC</small>
                  </p>
                </div>
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
