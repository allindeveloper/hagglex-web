import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import customMenuItemStyle from "./customMenuItemStyle";
import clsx from 'clsx'
import { navigation } from "../../../types/navigation";
import { useTheme } from "@mui/material";
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export interface CustomMenuItemProps {
    item: navigation,
    onitemClick?: (item: navigation) => void,
    isselected?:boolean | any
}


const CustomMenuItem: React.FC<CustomMenuItemProps> = ({isselected, item, onitemClick }) => {

    const classes = customMenuItemStyle()
    const appTheme = useTheme()
    const [leftEnd, setleftEnd] = useState({})
    const leftEndStyle ={
        borderRight:`4px solid ${appTheme.palette.primary.main}`,
        borderTopRightRadius:'30px',
        borderBottomRightRadius:'30px',
    }

    const handleonMouseOver = ()=>{
        setleftEnd(leftEndStyle)
    }
    const handleonMouseOut = ()=>{
        setleftEnd({})
    }
    return (
        <div onClick={() => onitemClick?.(item)} className={classes.topLevel}onMouseOver={handleonMouseOver} onMouseOut={handleonMouseOut}>
        <label className={'sideItemLeft'}
        
        style={leftEnd} ></label>
        <div  className={classes.parentDiv} >
            <div className={classes.sideItem}>
            <ListItem 
            className={clsx(classes.root, isselected && classes.selected)} 
            
            button key={item.url}>
            <ListItemIcon> <i style={{transform:item.icon.includes('bank') ? 'scaleX(-1)':''}} className={clsx(`fas ${item.icon}`,classes.menuIcon)}></i></ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
        </div>
        </div>
        </div>
    )
}
export default CustomMenuItem