import React, { Suspense } from 'react';
import { Switch, } from 'react-router-dom';
import routes  from '../../constants/routes';
import GuardRoute from './guard';
import menuitems from '../../constants/menuitems';
import ScrollToTop from '../ui/ScrollToTop';
import { CssBaseline } from '@mui/material';
import SideNav from '../shared/SideNav';
import wrapperStyles from '../../styles/wrapperStyles';
import TopAppBar from '../shared/TopAppBar';


const Wrapper = () => {
    const classes = wrapperStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const menu = routes.map((route: any, index: number) => {
        return route.component ? (
            <GuardRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ) : null;
    });



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopAppBar handleDrawerToggle={handleDrawerToggle} />

            <SideNav
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                menuItems={menuitems}
            />
            <ScrollToTop>
            <main className={classes.content}>

                {/*  not sure what this stuff is for yet... */}
                {/* <div className={classes.toolbar} /> */}
                <>
                    <Suspense 
                    fallback={<div>Loading</div>}
                    >
                        <Switch>
                            {menu}
                        </Switch>
                        
                    </Suspense>
                </>
            </main>
            </ScrollToTop>
        </div>
    );
}
export default Wrapper

