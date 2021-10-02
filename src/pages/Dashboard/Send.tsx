import React, { useState } from "react";
import DoubleTabSections from "../../components/shared/DoubleTabSections";
import dashboardStyles from "../../styles/dashboardStyles";


const Send = ()=>{

    const classes = dashboardStyles()
    const [selected, setselected] = useState(0)

    const handleClickTab = (index:number)=>{
        setselected(index)
    }
    return(
        <div className={classes.sendRoot}>
            <DoubleTabSections 
            selected={selected}
            labelOne={"External Wallet"}
            labelTwo={'Hagglex Wallet'}
            handleClickTab={handleClickTab}

            componentOne={
                <div>
                    <p><b>Amount to Send</b></p>
                </div>
            }
            componentTwo={
                <div>
                </div>
            }
            />
        </div>
    )
}
export default Send