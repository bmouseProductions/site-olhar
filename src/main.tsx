import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from "react-router-dom";

import App from './app';
import { LoadingProvider } from './contexts/loading-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </Router>
  </React.StrictMode>,
)
