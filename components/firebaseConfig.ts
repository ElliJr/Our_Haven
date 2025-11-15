// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdNHKeC1b5gWkGffTK0KmCKgtv7cPRG0",
  authDomain: "ourhaven-8e6aa.firebaseapp.com",
  projectId: "ourhaven-8e6aa",
  storageBucket: "ourhaven-8e6aa.appspot.com",
  messagingSenderId: "1092384347388",
  appId: "1:1092384347388:web:75ecbd66bba913d686b379",
  measurementId: "G-2LB16ZSZZ1",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Auth (sem persistência → só em memória)
export const auth = initializeAuth(app);

// Firestore
export const db = getFirestore(app);
