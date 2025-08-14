// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdNHKeC1b5gWkGffTK0KmCKgtv7ZcPRG0",
  authDomain: "ourhaven-8e6aa.firebaseapp.com",
  projectId: "ourhaven-8e6aa",
  storageBucket: "ourhaven-8e6aa.firebasestorage.app",
  messagingSenderId: "1092384347388",
  appId: "1:1092384347388:web:75ecbd66bba913d686b379",
  measurementId: "G-2LB16ZSZZ1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa autenticação
export const auth = getAuth(app);
