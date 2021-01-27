import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIVfyvcfYN-bm6sxUpmw1cEeCjz6zrM-M",
    authDomain: "crud-react-492be.firebaseapp.com",
    projectId: "crud-react-492be",
    storageBucket: "crud-react-492be.appspot.com",
    messagingSenderId: "671873831965",
    appId: "1:671873831965:web:da222b3b758df59d4f62f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}