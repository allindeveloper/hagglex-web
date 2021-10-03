import { Grid, Typography } from "@mui/material";
import React from "react";
import Aux from "../../../components/hoc/_Aux";
import CustomButton from "../../../components/ui/CustomButton/CustomButton";
import CustomInput from "../../../components/ui/CustomInput/CustomInput";
import { Space } from "../../../components/ui/Space/Space";
import LoginStyles from "../../../styles/LoginStyles";
import OnboardingRightContainer from "../../../components/shared/OnboardingRightContainer";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUpErrors } from "../../../utils/validationStates";
import { useRef } from "react";
import { ISignUpRequestPayload, ISignUpResponse } from "../../../types/auth";
import { validator, validatorAll } from "../../../utils/validatorFunctions";
import { linkColor } from "../../../theme/default";
import { useEffect } from "react";
import { enterHandler } from "../../../utils/globalUtils";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../graphql/services/auth";

const SignUp: React.FC<any> = () => {
  const [step, setstep] = useState<number>(1);
  const classes = LoginStyles();
  const history = useHistory();
  const [togglePassword, settogglePassword] = useState(false);

  const [err, setError] = useState(signUpErrors);
  const hasError = useRef<any>(null);

  const [disabled, setdisabled] = useState(false);
  const [showReferral, setshowReferral] = useState(false);
  const [register, { loading }] = useMutation(REGISTER_USER);
  const [data, setData] = useState<ISignUpRequestPayload>({
    email: "",
    password: "",
    username: "",
    phonenumber: "",
  });

  const resetForm = () => {
    setData({
      email: "",
      password: "",
      username: "",
      phonenumber: "",
    });
    history.push("/login");
  };
  const handleCreateAccount =  async () => {
    validatorAll(
      [
        { name: "email", value: data.email, label: "Email" },
        { name: "password", value: data.password, label: "Password" },
        { name: "username", value: data.username, label: "Username" },
      ],
      "SignUp",
      setError,
      err,
      hasError
    );
    if (!hasError.current) {
      setdisabled(false);
      return;
    }
    if (Object.keys(hasError?.current).length > 0) {
      setdisabled(false);
      return;
    }
    const payload: ISignUpRequestPayload = {
      email: data.email,
      username: data.username,
      password: data.password,
      phonenumber: data.phonenumber,
      
    };
    const registerRes = await register({
      variables: payload,
    });
    if (registerRes) {
      
    }
    setdisabled(false);
  };

  const handleTogglePassword = () => {
    settogglePassword(!togglePassword);
  };

  const handleCreateFormInputChange = (
    input: string,
    label: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = e;
    setData((prevState) => ({
      ...prevState,
      [input]: target?.value,
    }));
    if (input !== "referralCode") {
      validator(
        { name: input, value: target.value, label: label },
        "SignUp",
        setError,
        err
      );
    }
  };

  const handleShowReferralInput = () => {
    setshowReferral(true);
  };
  useEffect(() => {
    enterHandler("finalsignup");
  });

  return (
    <div>
      <Grid container spacing={0} className={classes.container}>
        <OnboardingRightContainer />
        <div className={classes.formContainer}>
          <div className={classes.topLeftSquare}></div>
          <div className={classes.signupform}>
            <Aux>
              <Space top={30} />
              <Typography variant="h5">
                <b>Create new account</b>
              </Typography>

              <Space top={30} />
              {
                <Aux>
                  <Space top={20} />
                  <CustomInput
                    errorText={err.email}
                    showError={err.email.length > 0}
                    name="email"
                    value={data.email}
                    handleChange={(e) =>
                      handleCreateFormInputChange("email", "Email", e)
                    }
                    type="text"
                    labelText="Email Address"
                    id="signup-email"
                    placeholder="example@mail.com"
                  />
                  <Space top={10} />

                  <CustomInput
                    errorText={err.password}
                    showError={err.password.length > 0}
                    value={data.password}
                    handleChange={(e) =>
                      handleCreateFormInputChange("password", "Password", e)
                    }
                    name="password"
                    labelText="Password"
                    id="signup-password"
                    placeholder="Enter password"
                    type={togglePassword ? "text" : "password"}
                    endIcon={
                      <div
                        className="cursor-pointer"
                        style={{ color: linkColor }}
                        onClick={handleTogglePassword}
                      >
                        {togglePassword ? "Hide" : "Show"}
                      </div>
                    }
                  />

                  <Space top={10} />

                  <CustomInput
                    errorText={err.username}
                    showError={err.username.length > 0}
                    value={data.username}
                    handleChange={(e) =>
                      handleCreateFormInputChange("username", "Username", e)
                    }
                    name="username"
                    labelText="Create username"
                    id="signup-username"
                    placeholder="Enter username"
                    type={"text"}
                  />
                  <Space top={10} />
                  <CustomInput
                    errorText={err.phonenumber}
                    showError={err.phonenumber.length > 0}
                    value={data.phonenumber}
                    name="phonenumber"
                    handleChange={(e) =>
                      handleCreateFormInputChange(
                        "phonenumber",
                        "Phone number",
                        e
                      )
                    }
                    type="text"
                    labelText="Enter your phone number"
                    id="signup-phonenumber"
                    placeholder="Enter your mobile number"
                  />

                  <Space top={20} />

                  <Space bottom={20} />
                </Aux>
              }
            </Aux>
            {!showReferral&&<div onClick={handleShowReferralInput}>
              <Typography className={classes.gotReferralCode}>
                <b>Got referral code ?</b>
              </Typography>
            </div>}
            {showReferral && (
              <CustomInput
                value={data.referralCode}
                name="referralCode"
                handleChange={(e) =>
                  handleCreateFormInputChange(
                    "referralCode",
                    "Referral Code",
                    e
                  )
                }
                variant="outlined"
                type="text"
                id="signup-referralCode"
                placeholder="Referral code"
              />
            )}

            <Space top={25} />
            <CustomButton
            disabled={disabled}
            loading={loading}

            text="Sign Up" 
            id="finalsignup" 
            show />
            <Space top={20} />
            <div className="d-flex justify-content-center mb-5">
              <div>
                <small>Have an account? </small>
              </div>
              <div>
                <small>
                  <Link to="login" className="text-decoration-none ms-2">
                    Sign in to explore
                  </Link>
                </small>
              </div>
            </div>

            <Space top={40} />
            <div className="d-flex justify-content-between">
              <div className={classes.needHelp}>
                <small>Need help?</small>
              </div>
              <div>
                <small>
                  <div className="d-flex justify-content-between">
                    <div className="me-2">
                      <Typography variant="caption">Privacy</Typography>
                    </div>
                    <div className="ms-4">
                      <Typography variant="caption"> Terms & Policy</Typography>
                    </div>
                  </div>
                </small>
              </div>
            </div>
          </div>
          <div className={classes.bottomRightSquare}></div>
        </div>
      </Grid>
    </div>
  );
};

export default SignUp;
