import { LinearProgress } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { AUTH_USER } from "../../constants/appConstants";
import AppSettingsContext from "../../context/AppSettingsContext";
import AuthContext from "../../context/AuthContext";
import { IUser } from "../../types/User";
import Wrapper from "./Wrapper";

const AuthLayout = () => {
  const { getUserCredentials, updateCurrentUser } = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const { updateshowdefaultAlert } = useContext(AppSettingsContext);
  const history = useHistory();
  useEffect(() => {
    setloading(true);
    const current = getUserCredentials(AUTH_USER) as unknown as IUser;
    if (current && Object.keys(current).length > 0) {
      updateCurrentUser(current);
      setloading(false);
    } else {
      updateshowdefaultAlert(true, "Please login again", "error");
      history.push("/");
    }
  }, []);

  return (
    <>
      {loading ? (
        <div><LinearProgress /></div>
      ) : (
        <>
          <Wrapper />
        </>
      )}
    </>
  );
};
export default AuthLayout;
