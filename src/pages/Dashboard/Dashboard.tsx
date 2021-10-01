import { Grid } from "@mui/material";
import React from "react";
import dashboardStyles from "../../styles/dashboardStyles";
import LeftSection from "./LeftSection";

const Dashboard = ()=>{

    const classes = dashboardStyles()
    return(
        <div className={classes.dashboardRoot}>
            <div className={classes.topCard}>
                <div>
                <small className="m-0">My Asset Portfolio</small>
                <h1 className="m-0">N0.00 </h1>
                </div>
                <div>
                    
                </div>
            </div>

            <Grid container spacing={2} className="mt-3">

                <Grid item md={6} xs={12}>
                    <div className={classes.leftCard}>
                        <LeftSection />
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className={classes.rightCard}>

                    </div>
                </Grid>
            </Grid>
           
        </div>
    )
}
export default Dashboard