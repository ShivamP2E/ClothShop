import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // using shopContextProvider we call passs all_products data to all the pages.
    <GoogleOAuthProvider clientId='307141657380-3h9d02gmkn64sgth5nmj7ncr1ve8lqhh.apps.googleusercontent.com'>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

