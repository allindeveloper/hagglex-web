import React from "react";

import clsx from 'clsx'
import customIconStyles from "./customIconStyles";

export interface CustomIconProps {
    className:string,
    style?:React.CSSProperties,
    size?:number,
    color?:string,
    onClick?:()=>void
}

const CustomIcon: React.FC<CustomIconProps> = ({className ,style,size,color,onClick}) => {
    const classes = customIconStyles()
    return (
        <i className={clsx(className,classes.root)} onClick={onClick} style={{...style,fontSize:`${size}px`,color:color}}></i>
    )
}
export default CustomIcon