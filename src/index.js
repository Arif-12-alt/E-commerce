import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-a5defoerodkfdscp.us.auth0.com"
    clientId="2F5L73mnH2n6DFDAX1nbg2LoWiPYBPf5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <App />
  </Auth0Provider>

);
reportWebVitals();
