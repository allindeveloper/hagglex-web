import React, { Suspense } from 'react'
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


interface MainLayoutProps {

}
const MainLayout: FC<MainLayoutProps> = () => {

    return (
        <Aux>
            <ScrollToTop>
            <Suspense fallback={<div>Loading Main Layout</div>}>
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
            
        </Aux>
    )
}
export default MainLayout