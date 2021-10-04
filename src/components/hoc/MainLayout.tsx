import React, { Suspense, useContext } from 'react'
import Aux from './_Aux'
import {
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import SignIn from '../../pages/auth/SignIn/SignIn';
import { FC } from 'react';
import SignUp from '../../pages/auth/SignUp/SignUp';
import AuthLayout from './AuthLayout';
import ScrollToTop from '../ui/ScrollToTop';
import VerifyAccount from '../../pages/auth/VerifyAccount/VerifyAccount';
import AppSettingsContext from '../../context/AppSettingsContext';
import { Alert, LinearProgress, Snackbar } from '@mui/material';


interface MainLayoutProps {

}
const MainLayout: FC<MainLayoutProps> = () => {

    const { showdefaultAlert, defaultAlertMessage, alertType, updateshowdefaultAlert } = useContext(AppSettingsContext);

    return (
        <Aux>
            <ScrollToTop>
            <Suspense fallback={<div><LinearProgress /></div>}>
                <Switch>
                    {/* All unthenticated Routes will go here */}
                    <Route exact path="/">
                        <Redirect to="/login" />
                       
                    </Route>
                    
                    <Route
                        path={"/login"}
                        exact
                        render={() => (
                            <SignIn

                            />
                        )}
                    />
                   
                    <Route
                        path={"/sign-up"}
                        exact
                        render={() => (
                            <SignUp

                            />
                        )}
                    />
                    <Route
                        path={"/verify-account"}
                        exact
                        render={() => (
                            <VerifyAccount

                            />
                        )}
                    />
                    <Route
                        path={"/app/"}
                        render={() => (
                            <AuthLayout

                            />
                        )}
                    />
                    <Route
                        render={() => 
                        <div>Error 404</div>
                    }
                    />
                </Switch>
            </Suspense>
            </ScrollToTop>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={showdefaultAlert}
                key={'top' + 'center'}
                autoHideDuration={3000}
                onClose={() => updateshowdefaultAlert(false)}
            >
                <Alert elevation={5} variant="filled" onClose={() => updateshowdefaultAlert(false)} severity={alertType}>
                    {defaultAlertMessage?.toLocaleUpperCase()}
                </Alert>
            </Snackbar>
        </Aux>
    )
}
export default MainLayout