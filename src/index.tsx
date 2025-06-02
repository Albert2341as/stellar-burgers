import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './services/store';
=======
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store';
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
      <App />
=======
      <BrowserRouter>
        <App />
      </BrowserRouter>
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
    </Provider>
  </React.StrictMode>
);
