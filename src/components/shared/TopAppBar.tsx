import React, { useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import topnavStyles from "../../styles/topnavStyles";
import CustomMenuWrapper from "../ui/CustomMenuWrapper/CustomMenuWrapper";
import { Avatar, Badge, Hidden, MenuItem } from "@mui/material";
import CustomIcon from "../ui/CustomIcon/CustomIcon";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { linkColor } from "../../theme/default";
import CustomBadge from "../ui/CustomBadge/CustomBadge";
import { invokeAvatarInitials } from "../../utils/globalUtils";
interface TopAppBarProps {
  handleDrawerToggle?: () => void;
}
const TopAppBar: React.FC<TopAppBarProps> = ({ handleDrawerToggle }) => {
  const classes = topnavStyles();
  const history = useHistory();
  const { currentUser, setLogout } = useContext(AuthContext);

  const handleLogout = () => {
    setLogout();
    history.push("/");
  };

  useEffect(() => {
  }, []);
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
              <MenuIcon htmlColor="#000000" className="me-2" />
            </IconButton>
            <Typography variant="h6" noWrap></Typography>
          </div>
          <div className="d-flex align-items-center">
            <CustomBadge badgeContent={4} overlap="circular"  className="me-4">
            <NotificationsIcon sx={{ color: linkColor }} fontSize="large" color="secondary" />
            </CustomBadge>
            <CustomMenuWrapper
              menuButton={
                <div className={classes.userMenu}>
                  <Avatar className="cursor-pointer">{invokeAvatarInitials(currentUser.username)}</Avatar>
                  <Hidden xsDown>
                    <Typography variant="caption">
                      <label>{currentUser.username}</label>
                    </Typography>
                  </Hidden>
                  <CustomIcon className="fas fa-caret-down" />
                  
                </div>
              }
              hasMultiple={true}
            >
              
                <MenuItem className={classes.menuItem}>
                  <CustomIcon className="fas fa-cog" />
                  <span> Settings </span>
                </MenuItem>
            

              <MenuItem
                className={classes.menuItem}
                component={"div"}
                onClick={handleLogout}
              >
                <CustomIcon className="fas fa-sign-out-alt" />
                <span> Log out </span>
              </MenuItem>
            </CustomMenuWrapper>
          </div>
        </div>
      </Toolbar>
     
    </AppBar>
  );
};
export default TopAppBar;
