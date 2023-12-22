// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Gdlg_YKEg9JX3iGJoDntVTNNzkRsmN8",
  authDomain: "vaastu-a4eab.firebaseapp.com",
  projectId: "vaastu-a4eab",
  storageBucket: "vaastu-a4eab.appspot.com",
  messagingSenderId: "945276804465",
  appId: "1:945276804465:web:8580cdfd4dee091eaeead0",
  measurementId: "G-9QL44YM6DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// console.log(app);
const auth =getAuth();

  //----- New Registration code start	  
  document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});
//----- End

//----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
});
//----- End

//----- Logout code start	  
// document.getElementById("logout").addEventListener("click", function() {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log('Sign-out successful.');
//         alert('Sign-out successful.');
//         document.getElementById('logout').style.display = 'none';
//       }).catch((error) => {
//         // An error happened.
//         console.log('An error happened.');
//       });		  		  
// });
//----- End

const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

   
    function redirectToGenerator() {
        window.location.href = 'generator.html';
    }

    loginButton.addEventListener('click', () => {
      
        redirectToGenerator();
    });

    registerButton.addEventListener('click', () => {
       
        redirectToGenerator();
    });