import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import {Provider} from "react-redux";
import { store } from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ loader: 'oval' }}>
<Provider store={store}>
<App />
</Provider>
  </MantineProvider>
</BrowserRouter>
</React.StrictMode>
);


