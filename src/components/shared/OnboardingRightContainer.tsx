import React from "react";

import LoginStyles from "../../styles/LoginStyles";
import { Space } from "../ui/Space/Space";
import { Link } from "react-router-dom";
export interface OnboardingRightContainer {
  description:string | JSX.Element
}
const OnboardingRightContainer: React.FC<OnboardingRightContainer> = ({description}) => {

  const classes = LoginStyles()
  return (
        <div className={classes.logotypeContainer}>
         
         
          
                   
    </div>

  )
}

export default OnboardingRightContainer;