// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log(import.meta.env.VITE_APIKEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,

  // apiKey: "AIzaSyAxSq2xnG4maLZkyiO3MDtxH_FdKLPdYzc",
  // authDomain: "my-personal-blog-website-fbec0.firebaseapp.com",
  // projectId: "my-personal-blog-website-fbec0",
  // storageBucket: "my-personal-blog-website-fbec0.appspot.com",
  // messagingSenderId: "943227537894",
  // appId: "1:943227537894:web:2d413201f119463e4b6e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;