// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { ReactNativeAsyncStoragePersistence } from 'firebase/auth/react-native'; // <- import correto

// Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdNHKeC1b5gWkGffTK0KmCKgtv7cPRG0",
  authDomain: "ourhaven-8e6aa.firebaseapp.com",
  projectId: "ourhaven-8e6aa",
  storageBucket: "ourhaven-8e6aa.appspot.com",
  messagingSenderId: "1092384347388",
  appId: "1:1092384347388:web:75ecbd66bba913d686b379",
  measurementId: "G-2LB16ZSZZ1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência no AsyncStorage
export const auth = initializeAuth(app, {
  persistence: ReactNativeAsyncStoragePersistence(AsyncStorage)
});

// Inicializa Firestore
export const db = getFirestore(app);
