// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdeINfTJ0EVvrAmhZeeM_QrGDh3_ghr-I",
  authDomain: "weight-app-7974f.firebaseapp.com",
  projectId: "weight-app-7974f",
  storageBucket: "weight-app-7974f.firebasestorage.app",
  messagingSenderId: "198768261514",
  appId: "1:198768261514:web:a58c09d51296777654b073",
  measurementId: "G-D34SDD0M35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();