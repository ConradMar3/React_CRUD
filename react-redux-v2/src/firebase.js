import React from "react";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import * as firebase from "./firebase";

export function database() {

}


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyALkuaYaWu5AUVCLuzz3FyYWCEgBeRpwO0",

    authDomain: "reactreduxv2.firebaseapp.com",

    projectId: "reactreduxv2",

    storageBucket: "reactreduxv2.appspot.com",

    messagingSenderId: "841655648000",

    appId: "1:841655648000:web:97d4bdd3394645714e3de5",

    measurementId: "G-0WK98C6MPW"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default firebase;