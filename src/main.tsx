import React from 'react';
import { createRoot } from 'react-dom/client';
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);