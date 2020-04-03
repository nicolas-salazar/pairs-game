//Conexión con herramientas de firebase:
import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCK3mhHqJl0BRXQJxqokjD9bZza3V2GYaY",
    authDomain: "pairsgame-265ed.firebaseapp.com",
    databaseURL: "https://pairsgame-265ed.firebaseio.com",
    projectId: "pairsgame-265ed",
    storageBucket: "pairsgame-265ed.appspot.com",
    messagingSenderId: "682513439479",
    appId: "1:682513439479:web:b69077a7e78689cd36d1f2",
    measurementId: "G-4RCC73BFWD"
});

export const firebaseApp = firebase;
export const firestoreDB = firebase.firestore();