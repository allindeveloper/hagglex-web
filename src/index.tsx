import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/hoc/MainLayout";
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import Themes from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GlobalStyles from "./styles/GlobalStyles";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProviderContainer } from './context/AuthContext';

const generateClassName = createGenerateClassName({
  productionPrefix: "--hagglex-web--",
});
const GlobalStylesC = () => {
  GlobalStyles();

  return null;
};
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={Themes.default}>
          <AuthProviderContainer>
          <BrowserRouter>
            <GlobalStylesC />
            <MainLayout />
          </BrowserRouter>
          </AuthProviderContainer>
        </ThemeProvider>{" "}
      </StylesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
