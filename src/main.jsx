import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Provider } from 'react-redux';
import { store } from './store/index.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
  </Provider>
)
