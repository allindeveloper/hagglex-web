import { Grid, LinearProgress, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Aux from "../../../components/hoc/_Aux";
import { Space } from "../../../components/ui/Space/Space";
import LoginStyles from "../../../styles/LoginStyles";
import OnboardingRightContainer from "../../../components/shared/OnboardingRightContainer";
import { useState } from "react";
import {  useHistory, useLocation } from "react-router-dom";
import ReactCodeInput from "react-verification-code-input";
import { useMutation } from "@apollo/client";
import { VERIFY_USER } from "../../../graphql/services/auth";
import AuthContext from "../../../context/AuthContext";
import { maskEmail } from "../../../utils/globalUtils";

const VerifyAccount: React.FC<any> = () => {
  const classes = LoginStyles();
  const history = useHistory();
  const location = useLocation<any>();
  const [val, setVal] = useState("");
  const [verifyUser, { loading }] = useMutation(VERIFY_USER);
  const { setUserCredentials, setAuthAndCache, updateCurrentUser } =
    useContext(AuthContext);
  const handleChange = (vals: string) => {
    setVal(vals);
  };

  useEffect(() => {
    if (val !== "" && val.length === 6) {
      handleVerifyUser();
    }
  }, [val]);

  const handleVerifyUser = async () => {
    const verifyUserResponse = await verifyUser({
      variables: {
        code: parseInt(val),
      },
    });
    if (verifyUserResponse) {
      if (verifyUserResponse?.data?.verifyUser) {
        setAuthAndCache(
          `${`Bearer`} ${verifyUserResponse.data?.verifyUser?.token}`
        );
        updateCurrentUser(verifyUserResponse.data?.verifyUser?.user);
        setUserCredentials(verifyUserResponse.data?.verifyUser?.user);
        history.push('/app/dashboard')
      }
    }
  };
  return (
    <div>
      <Grid container spacing={0} className={classes.container}>
        <OnboardingRightContainer />
        <div className={classes.formContainer}>
          <div className={classes.signupform}>
            <Space top={60} />
            <Aux>
              <Typography variant="h5">
                <b>Verify Email </b>
              </Typography>
              <p>
                <small>
                  Please type in the code that has been sent to
                  <label>{maskEmail(location.state?.email)}</label>
                </small>
              </p>
              <Space top={60} />
              {
                <Aux>
                  <Space top={20} />
                  <ReactCodeInput
                    autoFocus
                    fields={6}
                    disabled={loading}
                    type="text"
                    onChange={handleChange}
                    className="m-auto input-group"
                  />
                  <Space top={20} />
                  {loading && <LinearProgress />}

                  <Space bottom={30} />
                </Aux>
              }
            </Aux>
            <Space top={25} />
            <Space top={25} />

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

export default VerifyAccount;
