// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Pj7G-GQSI55SCl_wNtzKYCMJhO6VFig",
  authDomain: "ema-john-project-ph-auth.firebaseapp.com",
  projectId: "ema-john-project-ph-auth",
  storageBucket: "ema-john-project-ph-auth.appspot.com",
  messagingSenderId: "712672101557",
  appId: "1:712672101557:web:4a78b51967d7dd6b53aafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;