import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './assets/main.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAeflf6e_tfRQqczeNUyeoIUlDpZFpdnao",
    authDomain: "darpokoja-f44a5.firebaseapp.com",
    databaseURL: "https://darpokoja-f44a5.firebaseio.com",
    projectId: "darpokoja-f44a5",
    storageBucket: "darpokoja-f44a5.appspot.com",
    messagingSenderId: "337421606076",
    appId: "1:337421606076:web:cbbbcd2963cab1219c04b9",
    measurementId: "G-J3YVDW4L4W"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
