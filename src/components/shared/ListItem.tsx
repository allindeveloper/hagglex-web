import React from "react";
import listItemStyles from "../../styles/listItemStyles";
import { Space } from "../ui/Space/Space";

export interface ListItemProps {
    image: any,
    name:string,
    code:string,
    amount:number,
}
const ListItem = <T,>({image,name,amount,code}: ListItemProps) => {
    const classes = listItemStyles()
    return (
        <div className={classes.listItemRoot}>
            <div className="d-flex">
                <div>
                <img src={image}/>
                </div>
                <div className="mt-1">
                    <p className="mb-1">{name}</p>
                    <small className="m-0 text-muted">{code}</small>
                </div>
            </div>
            <div className={classes.listItemRight}>
                <p className="mb-1">{amount.toFixed(2)} {code}</p>
                <small>NGN {amount.toFixed(2)}</small>
            </div>
        </div>
    )
}

export default ListItem