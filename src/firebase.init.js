// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-XyHuQ67zvI-7ZIV85lNvCcMEgQJrKS4",
  authDomain: "buyer-and-seller-house.firebaseapp.com",
  projectId: "buyer-and-seller-house",
  storageBucket: "buyer-and-seller-house.appspot.com",
  messagingSenderId: "121903677697",
  appId: "1:121903677697:web:ef3003a34e3633eed69b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;