import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import customMenuItemStyle from "./customMenuItemStyle";
import clsx from 'clsx'
import { navigation } from "../../../types/navigation";

export interface CustomMenuItemProps {
    item: navigation,
    onitemClick?: (item: navigation) => void,
    isselected?:boolean | any
}

const CustomMenuItem: React.FC<CustomMenuItemProps> = ({isselected, item, onitemClick }) => {

    const classes = customMenuItemStyle()

    return (
        <div onClick={() => onitemClick?.(item)} className={classes.parentDiv} >
            <div className={classes.sideItem}>
            <ListItem 
            className={clsx(classes.root, isselected && classes.selected)} 
            
            button key={item.url}>
            <ListItemIcon> <i className={clsx(item.icon,classes.menuIcon)}></i></ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
        </div>
        </div>
    )
}
export default CustomMenuItem