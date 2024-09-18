
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ChakraProvider>
        <Auth0Provider
          domain="dev-oy4pwm7w6yb35b0o.us.auth0.com"
          clientId="U14wUlrtWwpjwH7KFqtWpspyEqTSJ4o9"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </ChakraProvider>
  </BrowserRouter>
)
