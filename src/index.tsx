<<<<<<< HEAD
// index.tsx

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app';
import './index.css';
import store from './services/store';
=======
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
>>>>>>> feature-new

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
=======
    <App />
>>>>>>> feature-new
  </React.StrictMode>
);
