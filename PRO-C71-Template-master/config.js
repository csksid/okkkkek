import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDlsHtJ2z4fbjqUjAzgfvLfGzg9s22vskQ",
    authDomain: "saos-3dc4d.firebaseapp.com",
    projectId: "saos-3dc4d",
    storageBucket: "saos-3dc4d.appspot.com",
    messagingSenderId: "373822362421",
    appId: "1:373822362421:web:a26fe99b446f22890a727c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
