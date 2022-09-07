import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

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
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebaseConfig;