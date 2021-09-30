import React from "react";
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import topnavStyles from "../../styles/topnavStyles";
import CustomMenuWrapper from "../ui/CustomMenuWrapper/CustomMenuWrapper";
import { Avatar, Chip, Hidden, MenuItem } from "@mui/material";
import CustomIcon from "../ui/CustomIcon/CustomIcon";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

interface TopAppBarProps {
    handleDrawerToggle?: () => void
}
const TopAppBar: React.FC<TopAppBarProps> = ({ handleDrawerToggle }) => {
    const classes = topnavStyles()
    const [statusText] = useState("you are live")
    const history = useHistory()
  
    const handleLogout = ()=>{
        // setLogout()
        history.push('/')
    }

    return (
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar>
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                           
                        </Typography>
                    </div>
                    <div className="d-flex align-items-center">
                    <Chip label={statusText.toLocaleUpperCase()} className={classes.statusTextChip} />
                        <CustomMenuWrapper
                            menuButton={
                                <div className={classes.userMenu}>
                                    <Avatar
                                        className="cursor-pointer"
                                    >UP</Avatar>
                                    <Hidden xsDown>
                                        <Typography variant="caption">
                                         <strong>Uchendu Precious</strong>
                                        </Typography>
                                    </Hidden>
                                    <CustomIcon className="fi-rr-caret-down"/>
                                    
                                </div>
                            }
                            hasMultiple={true}
                        >   
                        <Link to={'/app/settings/profile'}>
                            <MenuItem className={classes.menuItem}>
                                    <CustomIcon className="fi-rr-user" />
                                    <span> Profile </span>
                            </MenuItem>
                        </Link>

                            <MenuItem className={classes.menuItem} component={'div'} onClick={handleLogout}>
                                <CustomIcon className="fi-rr-sign-out" />
                                <span> Log out </span>
                            </MenuItem>
                        </CustomMenuWrapper>
                    </div>
                </div>
               
            </Toolbar>
            {/* <div className={classes.pageDescription}>
                   <Typography variant="caption">Hi Uchechi, here is the list of all the transaction you’ve performed. </Typography>
                </div> */}
        </AppBar >
    )


}
export default TopAppBar