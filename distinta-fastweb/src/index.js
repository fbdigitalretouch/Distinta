import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="fb-digitalretouch.eu.auth0.com"
    clientId="k7hN51f6iKILJleL6iAglYcsk67BZJnr"
    redirectUri={window.location.origin
    }
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

