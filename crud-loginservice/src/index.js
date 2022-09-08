import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDizWE09zgmoWqL8O7TV-smEf-M6bEm2RY",
  authDomain: "react-loginservice.firebaseapp.com",
  projectId: "react-loginservice",
  storageBucket: "react-loginservice.appspot.com",
  messagingSenderId: "826387399783",
  appId: "1:826387399783:web:36c217febca05c494400c2"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
