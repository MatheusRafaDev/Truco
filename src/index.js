import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router'
import { AuthProvider } from "./providers/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);