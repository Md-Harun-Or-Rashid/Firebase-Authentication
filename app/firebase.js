
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sSm3IgHfpLK6BIy9-F_SWRY9jgVQxMc",
  authDomain: "fir-auth-a5959.firebaseapp.com",
  projectId: "fir-auth-a5959",
  storageBucket: "fir-auth-a5959.firebasestorage.app",
  messagingSenderId: "1069195732141",
  appId: "1:1069195732141:web:90a1785b6fddcff6981224"
};

// Initialize Firebase
let app;
//let app=firebase.initializeApp(firebaseConfig);


if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export {auth};

//export const auth=app.auth();