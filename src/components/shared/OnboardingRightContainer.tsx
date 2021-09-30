import React from "react";

import LoginStyles from "../../styles/LoginStyles";
import { Space } from "../ui/Space/Space";
import { Link } from "react-router-dom";
export interface OnboardingRightContainer {
}
const OnboardingRightContainer: React.FC<OnboardingRightContainer> = () => {

  const classes = LoginStyles()
  return (
        <div className={classes.logotypeContainer}>
         
         

                   
    </div>

  )
}

export default OnboardingRightContainer;