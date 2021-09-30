import { Divider, Drawer, Hidden, useTheme,Theme } from "@mui/material";
import React from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import sidenavStyles from "../../styles/sidenavStyles";
import { navigation } from "../../types/navigation";
import CustomMenuItem from "../ui/CustomMenuItem/CustomMenuItem";
import mainbrand from '../../assets/svg/mainbrand.svg'
import { Space } from "../ui/Space/Space";
import { useMediaQuery } from "@mui/material";
interface SideNavProps {
  window?: () => Window;
  mobileOpen?: boolean,
  handleDrawerToggle?: () => void,
  menuItems?: navigation[] | undefined
}
const SideNav = (props: SideNavProps) => {
  const { window, mobileOpen, handleDrawerToggle, menuItems } = props;
  const theme = useTheme();
  const location = useLocation()
  const history = useHistory()
  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = sidenavStyles()
  const matchesMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));


  const onitemClick = (currentItem: navigation) => {
    if(matchesMobile){
    handleDrawerToggle?.()
    }
    history.push(currentItem.url)
  }

  const navItems = menuItems?.filter((item)=>item?.show !== false)?.map(item => {
    const isSelected = matchPath(location.pathname, item.url);
    return (
      <CustomMenuItem isselected={isSelected} key={item.id} onitemClick={onitemClick} item={item} />
    )
  }
  );
  const drawer = (
    <div>
      <div className={classes.logoContainer}>
        <div><img src={mainbrand} alt="Hagglex" /></div>
        <div><p className={classes.logoText}><b>Hagglex.</b></p></div>
      </div>
      <div className={classes.toolbar} />
      <Space bottom={20}/>
      <Divider />
      <Space top={30}/>
      {navItems}

    </div>
  );
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}
export default SideNav;