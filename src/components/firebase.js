import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDtX-04K6gHpODpWF7MfPKU1Fxjk3oNUys",
  authDomain: "learning-cda6e.firebaseapp.com",
  projectId: "learning-cda6e",
  storageBucket: "learning-cda6e.appspot.com",
  messagingSenderId: "464126453618",
  appId: "1:464126453618:web:d304a3f20ef3e6d6555feb",
  measurementId: "G-T0F3M4WJC0"
};


const firebaseApp = initializeApp(firebaseConfig); 

 const auth = getAuth(firebaseApp);

export  default {  auth };