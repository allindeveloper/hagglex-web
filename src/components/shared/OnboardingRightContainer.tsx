import React from "react";
import LoginStyles from "../../styles/LoginStyles";
import AuthCarousel from "./AuthCarousel";
import tradeglobally from '../../assets/svg/tradeglobally.svg'
export interface OnboardingRightContainer {
}
const OnboardingRightContainer: React.FC<OnboardingRightContainer> = () => {

  const classes = LoginStyles()
  return (
        <div className={classes.logotypeContainer}>
         
        <AuthCarousel>
          <div>
            <img src={tradeglobally} width={'10%'}/>
            <h2>Trade Globally</h2>
          </div>
          <div>
          <img src={tradeglobally} width={'10%'}/>
          <h2>Trade Securely</h2>
            </div>
            <div>
            <img src={tradeglobally} width={'10%'}/>
            <h2>Trade Smartly</h2>
            </div>
        </AuthCarousel>

                   
    </div>

  )
}

export default OnboardingRightContainer;