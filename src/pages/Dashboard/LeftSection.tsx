import React, { useState } from "react";
import { useHistory } from "react-router";
import TopNavigation from "../../components/shared/TopNavigation";
import FlexWallet from "./FlexWallet";


const LeftSection = ()=>{

    const [tabIndex, settabIndex] = useState(0)
    const history = useHistory()
    
    const handlesetTabIndex = (index:number)=>{
        settabIndex(index)
    }
    return(
        <TopNavigation
        id={tabIndex}
        handlesetTabIndex={handlesetTabIndex}
        history={history}
        tabs={[
          {
            label: "Flex",
            index: 0,
            hidden: false,
          },
          {
            label: "Vault",
            index: 1,
            hidden: false,
          },
          
        ]}
        tabPanels={[
          {
            index: 0,
            component: <FlexWallet/>
          },
          {
            index: 1,
            component: (
                <div>
                Vault
            </div>
            ),
          },
          
        ]}
        tabIndex={tabIndex}
      />
    )
}
export default LeftSection