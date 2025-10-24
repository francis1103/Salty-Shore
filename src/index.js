import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DeliveryProvider } from './context/DeliveryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DeliveryProvider>
    <App />
  </DeliveryProvider>
);
