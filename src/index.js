import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixIndex } from './netflix/netflix-index';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Login } from './components/login/login';
import ShoppingComponent from './components/ShoppingComponent';
import EventBindigComponebt from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBindingComponent';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import FormComponent from './components/FormComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ShoppingComponent /> */}
    <FormComponent/>

    {/* <TwoWayBinding /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
