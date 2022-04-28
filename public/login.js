import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJ7IzAIB3cywhHZCiYqLlfHpq1-kUNPbw",
    authDomain: "koinget-bba63.firebaseapp.com",
    projectId: "koinget-bba63",
    storageBucket: "koinget-bba63.appspot.com",
    messagingSenderId: "244129629387",
    appId: "1:244129629387:web:615cd7c7e38ddb8d3bc74e",
    measurementId: "G-6R2ZMP87GQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const d = document;
  const provider = new GoogleAuthProvider();
  const auth = getAuth();



// DOM elements
const btnLogin = d.getElementById('btn-google')
const usernameDisplay = d.getElementById('username-display');
btnLogin.addEventListener('click', () => {iniciarSesionGoogle()});

// login con google
const iniciarSesionGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        const user = res.user;
        console.log(user);
        console.log(`Hola de nuevo ${user.displayName}!`)
        btnLogin.style.display = 'none'
        usernameDisplay.innerHTML = `Hola de nuevo ${user.displayName}` 
    });
};


