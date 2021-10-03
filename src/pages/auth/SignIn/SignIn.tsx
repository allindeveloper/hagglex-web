import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Aux from "../../../components/hoc/_Aux";
import CustomButton from "../../../components/ui/CustomButton/CustomButton";
import CustomInput from "../../../components/ui/CustomInput/CustomInput";
import { Space } from "../../../components/ui/Space/Space";
import LoginStyles from "../../../styles/LoginStyles";
import OnboardingRightContainer from "../../../components/shared/OnboardingRightContainer";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInErrors } from "../../../utils/validationStates";
import { useRef } from "react";
import { ILoginRequestPayload } from "../../../types/auth";
import { validator, validatorAll } from "../../../utils/validatorFunctions";
import { linkColor } from "../../../theme/default";
import { useEffect } from "react";
import { enterHandler } from "../../../utils/globalUtils";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LOGIN_USER } from "../../../graphql/services/auth";
import { useMutation } from "@apollo/client";
import AuthContext from "../../../context/AuthContext";
const SignIn: React.FC<any> = () => {
  const [step, setstep] = useState<number>(1);
  const classes = LoginStyles();
  const history = useHistory();
  const [togglePassword, settogglePassword] = useState(false);
  const { setUserCredentials, setAuthAndCache, updateCurrentUser } =
    useContext(AuthContext);

  const [err, setError] = useState(signInErrors);
  const hasError = useRef<any>(null);

  const [disabled, setdisabled] = useState(false);

  const [data, setData] = useState<ILoginRequestPayload>({
    input: "",
    password: "",
  });
  const [login, { loading }] = useMutation(LOGIN_USER);
  const resetForm = () => {
    setData({
      password: "",
      input: "",
    });
    history.push("/app/dashboard");
  };
  const handleSignIn = async () => {
    setdisabled(true);
    validatorAll(
      [
        { name: "input", value: data.input, label: "Email" },
        { name: "password", value: data.password, label: "Password" },
      ],
      "SignIn",
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
    const payload: ILoginRequestPayload = {
      input: data.input,
      password: data.password,
    };
    const loginRes = await login({
      variables: payload,
    });
    if (loginRes) {
      setdisabled(false);
      setAuthAndCache(`${`Bearer`} ${loginRes.data?.login?.token}`);
      updateCurrentUser(loginRes.data?.login?.user);
      setUserCredentials(loginRes.data?.login?.user);
      resetForm();
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
    validator(
      { name: input, value: target.value, label: label },
      "SignIn",
      setError,
      err
    );
  };

  useEffect(() => {
    enterHandler("finalsignup");
  });
  return (
    <div>
      <Grid container spacing={0} className={classes.container}>
        <OnboardingRightContainer />
        <div className={classes.formContainer}>
          <div className={classes.signupform}>
            <Space top={60} />
            <Aux>
              <Typography variant="h5">
                <b>Welcome Back</b>
              </Typography>

              <Space top={60} />
              {
                <Aux>
                  <Space top={20} />
                  <CustomInput
                    errorText={err.input}
                    showError={err.input.length > 0}
                    name="input"
                    value={data.input}
                    handleChange={(e) =>
                      handleCreateFormInputChange("input", "Email", e)
                    }
                    type="text"
                    labelText="Email Address"
                    id="signup-email"
                    placeholder="Enter email address"
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
                        {togglePassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <RemoveRedEyeIcon />
                        )}
                      </div>
                    }
                  />

                  <Space top={10} />

                  <Space bottom={30} />
                </Aux>
              }
            </Aux>
            <div>
              <Typography className={classes.forgotpasswordText}>
                <b>Forgot password ?</b>
              </Typography>
            </div>

            <Space top={25} />
            <CustomButton
              text="Sign In"
              disabled={disabled}
              loading={loading}
              onClick={handleSignIn}
              show
            />
            <Space top={25} />
            <div className="d-flex justify-content-center mb-5">
              <div>
                <small>New user ? </small>
              </div>
              <div>
                <Link to="/sign-up" className="text-decoration-none ms-2">
                  Sign up to get started
                </Link>
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
        </div>
      </Grid>
    </div>
  );
};

export default SignIn;
