import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/hoc/MainLayout';
import { StylesProvider, createGenerateClassName } from '@mui/styles';


const generateClassName = createGenerateClassName({
  productionPrefix: '--hagglex-web--',
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
    <MainLayout />
    </BrowserRouter>
    </StylesProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
