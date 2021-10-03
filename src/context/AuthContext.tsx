import React, {
  createContext,
  FC,
  ReactChild,
  useState,
} from "react";
import { AUTH_TOKEN, AUTH_USER, TEMP } from "../constants/appConstants";
import client from "../graphql/client";
import { IUser } from "../types/User";
import { cryptographyService } from "../utils/globalUtils";
import { SecureStorage } from "../utils/storage";

const secureStorage = new SecureStorage();

const initState = {
  auth: secureStorage.getItem(AUTH_TOKEN),
  setAuthAndCache: (v: string) => {},
  setUserCredentials: (userObj: IUser) => {},
  getUserCredentials: (key: string) => {},
  setLogout: () => {},
  currentUser: {} as IUser,
  temp: {} as IUser,
  storeTemp: (value: IUser) => {},
  updateCurrentUser: (value: IUser) => {},
};
const AuthContext = createContext(initState);
export const AuthProvider = AuthContext.Provider;

export const getDefaultAuth = () => {
  try {
    const token = secureStorage.getItem(AUTH_TOKEN) as string;
    const decrypted = cryptographyService().decrypt(token) as string;
    return decrypted;
  } catch (e) {
    return null;
  }
};
//On user logout remove token from localstorage
export const setLogout = () => {
  client.resetStore();
  secureStorage.removeItem(AUTH_TOKEN);
  secureStorage.removeItem(AUTH_USER);
};

interface Props {
  children?: ReactChild | ReactChild[];
}

export const AuthProviderContainer: FC<Props> = ({ children }) => {
  const defaultAuth = getDefaultAuth();
  const [auth, setAuth] = useState<string | null>(defaultAuth);
  const [userObj, setuserObj] = useState<IUser | string>();
  const [encrypted, setEncryptedUser] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<IUser>(initState.currentUser);
  const [temp, setTemp] = useState<IUser>(initState.temp);

  const setAuthAndCache = (value: string) => {
    try {
      const encryptedV = cryptographyService().encrypt(value);
      value
        ? secureStorage.storeItem(AUTH_TOKEN, encryptedV)
        : secureStorage.removeItem(AUTH_TOKEN);

      setAuth(value);
    } catch (err) {}
  };

  const setUserCredentials = (userObj: IUser) => {
    if (userObj && Object.keys(userObj).length > 1) {
      setuserObj(userObj);
      const encrypted = cryptographyService().encrypt(userObj);
      secureStorage.storeItem(AUTH_USER, encrypted);
      setEncryptedUser(encrypted);
    }
  };

  const getUserCredentials = (key: string) => {
    const userObj = secureStorage.getItem(key) as unknown as string;
    const decrypted = userObj && cryptographyService().decrypt(userObj);
    return decrypted;
  };

  const updateCurrentUser = (value: IUser) => {
    if (value) setUserCredentials(value);
    setCurrentUser((currentUser) => ({ ...currentUser, ...value }));
  };

  const storeTemp = (value: IUser) => {
    if (value) secureStorage.storeItem(TEMP, JSON.stringify(value));
    setCurrentUser((temp) => ({ ...temp, ...value }));
  };

  return (
    <AuthProvider
      value={{
        auth,
        storeTemp,
        updateCurrentUser,
        getUserCredentials,
        currentUser,
        temp,
        setAuthAndCache,
        setLogout,
        setUserCredentials,
      }}
    >
      {children}
    </AuthProvider>
  );
};
export default AuthContext;
