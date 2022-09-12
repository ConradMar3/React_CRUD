import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import reportWebVitals from './reportWebVitals';


var firebaseConfig = {

  apiKey: "AIzaSyALkuaYaWu5AUVCLuzz3FyYWCEgBeRpwO0",

  authDomain: "reactreduxv2.firebaseapp.com",

  projectId: "reactreduxv2",

  storageBucket: "reactreduxv2.appspot.com",

  messagingSenderId: "841655648000",

  appId: "1:841655648000:web:97d4bdd3394645714e3de5",

  measurementId: "G-0WK98C6MPW"

};


firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
