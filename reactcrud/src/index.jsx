import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer, applyMiddleware(thunk));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDndchZsYMM24kMRK8IrMYrIRn8nsgMx70",
  authDomain: "react-redux-firebase-9698b.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-9698b-default-rtdb.firebaseio.com",
  projectId: "react-redux-firebase-9698b",
  storageBucket: "react-redux-firebase-9698b.appspot.com",
  messagingSenderId: "553235523641",
  appId: "1:553235523641:web:c9fb683dc02ce18758c5e8",
  measurementId: "G-RGC2XQDSRF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();