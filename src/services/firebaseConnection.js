import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyCRusaogN6f9c2derYGYGBOXaZJLxC-JU8",
    authDomain: "posts-ec624.firebaseapp.com",
    projectId: "posts-ec624",
    storageBucket: "posts-ec624.appspot.com",
    messagingSenderId: "179588723387",
    appId: "1:179588723387:web:0e7693d207e4ac55616f9e",
    measurementId: "G-245QYEG2XP"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}  

export default firebase;

