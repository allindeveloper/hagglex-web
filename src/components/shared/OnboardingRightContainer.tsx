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
        <div className="m-5">
          <img src={tradeglobally} width={"10%"} />
          <h2>Trade Globally</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
        <div>
          <img src={tradeglobally} width={"10%"} />
          <h2>Trade Securely</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
        <div>
          <img src={tradeglobally} width={"10%"} />
          <h2>Trade Smartly</h2>
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
