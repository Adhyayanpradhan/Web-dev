import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { firebase } from "@firebase/app";
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAYlIUqEpWYfT0uGmtKGuOka-uxahc9bgM",
  authDomain: "evernote-clone-b3704.firebaseapp.com",
  projectId: "evernote-clone-b3704",
  storageBucket: "evernote-clone-b3704.appspot.com",
  messagingSenderId: "862936019601",
  appId: "1:862936019601:web:72acbbda96b8790798c530",
  measurementId: "G-633ML4PX5R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
