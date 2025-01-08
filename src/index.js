import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the new import for React 18+
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
