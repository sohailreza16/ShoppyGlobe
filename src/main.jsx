// importing necessary components and redux store
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './utils/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
// providing redux store to all the components and rendering App component
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
