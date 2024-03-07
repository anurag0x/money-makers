import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyCD4foqq4a3LaDu-tq8e9Pqw77nFE7FR7s",
    authDomain: "money-makers-a9908.firebaseapp.com",
    projectId: "money-makers-a9908",
    storageBucket: "money-makers-a9908.appspot.com",
    messagingSenderId: "275743056187",
    appId: "1:275743056187:web:1d9a45e8c503423d53571e",
    measurementId: "G-TVTW5RBPQF"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);