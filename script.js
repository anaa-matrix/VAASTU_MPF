// script.js

// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".simple");
    const signupButton = document.querySelector(".signup");
  
    // Login Button Click Event
    loginButton.addEventListener("click", function () {
      const email = prompt("Enter your email:");
      const password = prompt("Enter your password:");
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Handle successful login
          const user = userCredential.user;
          console.log("Logged in:", user);
        })
        .catch((error) => {
          // Handle errors
          console.error("Login Error:", error.message);
        });
    });
  
    // Signup Button Click Event
    signupButton.addEventListener("click", function () {
      const email = prompt("Enter your email:");
      const password = prompt("Enter your password:");
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Handle successful signup
          const user = userCredential.user;
          console.log("Signed up:", user);
        })
        .catch((error) => {
          // Handle errors
          console.error("Signup Error:", error.message);
        });
    });
  });
  