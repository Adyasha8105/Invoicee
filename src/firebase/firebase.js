import firebase from "firebase/app"; 
import "firebase/auth"; 

var firebaseConfig = {
    apiKey: "AIzaSyC0qSJKAOTWfEwsSxYCi1h1pWQv7GmICJY",
    authDomain: "invoicee-3574c.firebaseapp.com",
    projectId: "invoicee-3574c",
    storageBucket: "invoicee-3574c.appspot.com",
    messagingSenderId: "461052819474",
    appId: "1:461052819474:web:b904c48283a20b65b380cb",
    measurementId: "G-SJFKCSXDBV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 