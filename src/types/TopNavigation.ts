import React from "react";

export interface ITabPanels {
    tabIndex?:number,
    index?:number,
    component?:React.ReactNode,
    [index: number]: number | React.ReactNode,
}
export interface ITabs{
    hidden?:boolean,
    index:number,
    [index: number]: boolean,
    label?:string
}