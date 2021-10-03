import React from "react";
import LoginStyles from "../../styles/LoginStyles";
import AuthCarousel from "./AuthCarousel";
import tradeglobally from "../../assets/svg/tradeglobally.svg";
export interface OnboardingRightContainer {}
const OnboardingRightContainer: React.FC<OnboardingRightContainer> = () => {
  const classes = LoginStyles();

  return (
    <div className={classes.logotypeContainer}>
      <AuthCarousel>
        <div className="">
          <img src={tradeglobally} />
          <h3>Trade Globally</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
        <div className="">
          <img src={tradeglobally} />
          <h3>Trade Securely</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
        <div className="">
          <img src={tradeglobally} />
          <h3>Trade Smartly</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
      </AuthCarousel>
    </div>
  );
};

export default OnboardingRightContainer;
