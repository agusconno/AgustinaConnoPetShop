import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkS4CteKT7Wxj3Fxn1EzOcbaU4lVTHRBY",
  authDomain: "pet-shopaconno.firebaseapp.com",
  projectId: "pet-shopaconno",
  storageBucket: "pet-shopaconno.appspot.com",
  messagingSenderId: "660852046811",
  appId: "1:660852046811:web:2b399814d40be7f420c5fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
