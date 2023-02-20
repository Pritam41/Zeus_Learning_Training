// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCWInIZUYLJxEzApzbJA7DJqdzV9HMd_w",
  authDomain: "udemy-modern-javascript-2dc0e.firebaseapp.com",
  projectId: "udemy-modern-javascript-2dc0e",
  storageBucket: "udemy-modern-javascript-2dc0e.appspot.com",
  messagingSenderId: "552858157879",
  appId: "1:552858157879:web:5e126de83a4905d1ae90b2",
  measurementId: "G-5R1Q796F33",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore(app);