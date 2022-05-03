// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQjxhZfAp10pfxRg3JzRw7ti-A7-RzmqY",
    authDomain: "register-form-c7557.firebaseapp.com",
    databaseURL: "https://register-form-c7557-default-rtdb.firebaseio.com",
    projectId: "register-form-c7557",
    storageBucket: "register-form-c7557.appspot.com",
    messagingSenderId: "984079710113",
    appId: "1:984079710113:web:f62d8046758dd18444bde0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);