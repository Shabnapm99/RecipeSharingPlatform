// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR-lPwFVAaaAslr6gGS3z_RavLgueKqPY",
  authDomain: "recipeapp-3d17c.firebaseapp.com",
  projectId: "recipeapp-3d17c",
  storageBucket: "recipeapp-3d17c.firebasestorage.app",
  messagingSenderId: "93661987990",
  appId: "1:93661987990:web:9c5646c470944c3c272eb7",
  measurementId: "G-NYCT4RHNRY",
  databaseURL: 'https://recipeapp-3d17c-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);