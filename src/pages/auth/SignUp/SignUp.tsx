import {
  Grid,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
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
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ISignUpRequestPayload } from "../../../types/auth";
import { validator, validatorAll } from "../../../utils/validatorFunctions";
import { linkColor } from "../../../theme/default";
import { useEffect } from "react";
import { enterHandler } from "../../../utils/globalUtils";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../../graphql/services/auth";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { countries } from "../../../constants/appConstants";
import countryCurreny from "iso-country-currency";
import AuthContext from "../../../context/AuthContext";
import customInputStyle from "../../../components/ui/CustomInput/customInputStyle";
import AppSettingsContext from "../../../context/AppSettingsContext";
const SignUp: React.FC<any> = () => {
  const classes = LoginStyles();
  const inputClasses = customInputStyle();
  const history = useHistory();
  const [togglePassword, settogglePassword] = useState(false);
  const matchesMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [err, setError] = useState(signUpErrors);
  const hasError = useRef<any>(null);

  const [disabled, setdisabled] = useState(false);
  const [showReferral, setshowReferral] = useState(false);
  const [data, setData] = useState<ISignUpRequestPayload>({
    email: "",
    password: "",
    username: "",
    phonenumber: "",
  });
  const [uiError, setuiError] = useState<any>();
  const { updateshowdefaultAlert } = useContext(AppSettingsContext);

  const { setUserCredentials, setAuthAndCache, updateCurrentUser } =
    useContext(AuthContext);
  const [countryCode, setcountryCode] = useState("ng");
  const [codeValue, setcodeValue] = useState<NumberFormatValues>({
    value: "234",
    floatValue: 0,
    formattedValue: "+234",
  });
  const [register, { loading }] = useMutation(REGISTER_USER, {
    onError: (error) => {
      updateshowdefaultAlert(true, error.message, "error");
    },
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
  const handleCreateAccount = async () => {
    validatorAll(
      [
        { name: "email", value: data.email, label: "Email" },
        { name: "password", value: data.password, label: "Password" },
        { name: "username", value: data.username, label: "Username" },
        { name: "phonenumber", value: data.phonenumber, label: "Phone number" },
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
    const ctry = countries.filter(
      (item) =>
        item.code.toLocaleLowerCase() === countryCode.toLocaleLowerCase()
    );
    const currency = countryCurreny.getAllInfoByISO(countryCode).currency;
    let payload: ISignUpRequestPayload = {
      email: data.email,
      username: data.username,
      password: data.password,
      country: ctry?.[0].label ?? "Nigeria",
      phonenumber: `${codeValue.value}${data.phonenumber}`,
      currency: currency || "NGN",
    };
    if(data.referralCode !== ""){
      payload.referralCode = data.referralCode
    }
    try {
      const registerRes = await register({
        variables: payload,
      });
      console.log('registerRes',registerRes)
      if (!registerRes.errors) {
        if (!registerRes.data?.register?.user.emailVerified) {
          setAuthAndCache(`${`Bearer`} ${registerRes.data?.register?.token}`);
          updateCurrentUser(registerRes.data?.register?.user);
          setUserCredentials(registerRes.data?.register?.user);
          history.push({
            pathname: "/verify-account",
            state: {
              email: data.email,
            },
          });
        } else {
          resetForm();
        }
      }
    } catch (e) {
      setuiError(e);
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
  },[]);
  const onValueChange = (values: NumberFormatValues) => {
    const filteredFlag = countries.filter(
      (item) => item.phone === values.value
    );
    setcodeValue(values);
    if (filteredFlag?.[0]) {
      setcountryCode(filteredFlag?.[0].code.toLocaleLowerCase());
    } else {
      setcountryCode("ng");
    }
  };

  return (
    <div>
      <Grid container spacing={0} className={classes.container}>
        <OnboardingRightContainer />
        <div className={classes.formContainer}>
          <div className={classes.topLeftSquare}></div>
          <div className={classes.signupform}>
            <Aux>
              <Space top={45} />
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
                        {togglePassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <RemoveRedEyeIcon />
                        )}
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
                  <Space top={17} />
                  <label className={inputClasses.inputLabel}>
                    Enter your phone number
                  </label>

                  <div className="d-flex justify-content-start">
                    <div className="mt-4">
                      <NumberFormat
                        value={codeValue?.value}
                        customInput={TextField}
                        onValueChange={onValueChange}
                        className={classes.countryCodeInputTextField}
                        InputProps={{
                          className: classes.countryCodeInput,
                          startAdornment: (
                            <div>
                              <img
                                loading="lazy"
                                width="40"
                                height="25"
                                src={`https://flagcdn.com/w20/${countryCode}.png`}
                                srcSet={`https://flagcdn.com/w40/${countryCode}.png 2x`}
                                alt=""
                              />
                            </div>
                          ),
                        }}
                        inputProps={{
                          className: "pt-2 pb-2 ps-1 pe-0",
                          style: {
                            width: 70,
                          },
                        }}
                        format="(+#####)"
                      />
                    </div>
                    <div className="mt-2">
                      <CustomInput
                        errorText={err.phonenumber}
                        showError={err.phonenumber.length > 0}
                        value={data.phonenumber}
                        name="phonenumber"
                        className="ms-3"
                        inputWidth={matchesMobile ? 170 : 200}
                        handleChange={(e) =>
                          handleCreateFormInputChange(
                            "phonenumber",
                            "Phone number",
                            e
                          )
                        }
                        type="text"
                        id="signup-phonenumber"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>

                  <Space top={20} />

                  <Space bottom={20} />
                </Aux>
              }
            </Aux>
            {!showReferral && (
              <div onClick={handleShowReferralInput}>
                <Typography className={classes.gotReferralCode}>
                  <b>Got referral code ?</b>
                </Typography>
              </div>
            )}
            {showReferral && (
              <CustomInput
                value={data.referralCode}
                name="referralCode"
                inputContainerclassName="mt-2 pt-0"
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
              onClick={handleCreateAccount}
              show
            />
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
