import React, { createContext, FC, ReactChild, useState } from "react";

const initState = {
  showdefaultAlert:false,
  updateshowdefaultAlert:(_value:boolean,_message?:string,_alertType?:string) => {},
  defaultAlertMessage:'' ,
  alertType:'info' as 'success' | 'info' | 'warning' | 'error',
  };
const AppSettingsContext = createContext(initState);
export const AppSettingsProvider = AppSettingsContext.Provider;
type Props = {
  children?: ReactChild | ReactChild[];
};
export const AppSettingsProviderContainer: FC<Props> = ({ children }) => {
  const [showdefaultAlert, setshowdefaultAlert] = useState<boolean>(initState.showdefaultAlert);
  const [defaultAlertMessage,setdefaultAlertMessage] = useState<any|string>(initState.defaultAlertMessage)
  const [alertType, setalertType] = useState<string|undefined|any>(initState.alertType)
  
  const updateshowdefaultAlert = (value: boolean,message?:string,alertType:string = 'info') => {
    setshowdefaultAlert(value);
    setdefaultAlertMessage(message)
    setalertType(alertType)
  }

  

  return (
    <AppSettingsProvider
      value={{alertType,showdefaultAlert,updateshowdefaultAlert ,defaultAlertMessage}}
    >
      {children}
    </AppSettingsProvider>
  );
};
export default AppSettingsContext;
