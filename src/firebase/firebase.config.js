// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwqJIIIgMQDBFoh5fwa1CsstKhh6q3Lqs",
  authDomain: "codezerox-2022.firebaseapp.com",
  projectId: "codezerox-2022",
  storageBucket: "codezerox-2022.appspot.com",
  messagingSenderId: "317410719437",
  appId: "1:317410719437:web:114c6f4baa3ec3c331db84",
  measurementId: "G-MBB142QYXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;