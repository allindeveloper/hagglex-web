import { Divider, Grid } from "@mui/material";
import React from "react";
import doubleTabSectionStyles from "../../styles/doubleTabSectionStyles";
import clsx from "clsx";
export interface IDoubleTabSections {
  selected: number;
  componentOne?: JSX.Element;
  componentTwo?: JSX.Element;
  labelOne:string,
  labelTwo:string,
  handleClickTab?:(index:number)=>void
}
const DoubleTabSections: React.FC<IDoubleTabSections> = ({
  selected=1,
  componentOne=(<div>Component One</div>),
  componentTwo=(<div>Component Two</div>),
  labelOne,
  labelTwo,
  handleClickTab
}) => {
  const classes = doubleTabSectionStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.tabHeaderRoot}>
        <Grid
          item
          md={6}
          xs={12}
          onClick={()=>handleClickTab?.(1)}
          className={clsx(selected === 1 ? classes.tabHeaderFirstSelected:classes.tabHeaderFirstNotSelected)}
        >
          <p><b>{labelOne}</b></p>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          onClick={()=>handleClickTab?.(2)}
          className={clsx(selected === 2 ? classes.tabHeaderSecondSelected:classes.tabHeaderSecondNotSelected)}
        >
          <p><b>{labelTwo}</b></p>
        </Grid>
      </Grid>
      <Divider />

      {selected === 1 && <div className={classes.components}>{componentOne}</div>}
      {selected === 2 && <div className={classes.components}>{componentTwo}</div>}
    </div>
  );
};

export default DoubleTabSections;
