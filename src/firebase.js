// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZYda369p98sgBDQ7ERYdj-__XewRNtMY",
  authDomain: "itlacrush-a7e16.firebaseapp.com",
  projectId: "itlacrush-a7e16",
  storageBucket: "itlacrush-a7e16.appspot.com",
  messagingSenderId: "288471773936",
  appId: "1:288471773936:web:af0544b10e6046c7528835"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();

export default firebase;