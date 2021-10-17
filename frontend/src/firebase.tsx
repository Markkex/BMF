import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWdhXZdV6o8j0lthXsloNcjOkdrFG-F-8",
    authDomain: "bmfportal-e0c4a.firebaseapp.com",
    projectId: "bmfportal-e0c4a",
    storageBucket: "bmfportal-e0c4a.appspot.com",
    messagingSenderId: "611780531784",
    appId: "1:611780531784:web:f00b31afe0e80b7780aa7d",
    measurementId: "G-ZXJLRTE4T8"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
