import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSZ5RSyNdrjrjnqN6DpA2VG7N8c7Zqjas",
    authDomain: "pool-reservation.firebaseapp.com",
    databaseURL: "https://pool-reservation.firebaseio.com",
    projectId: "pool-reservation",
    storageBucket: "pool-reservation.appspot.com",
    messagingSenderId: "584510817541",
    appId: "1:584510817541:web:47fecd019e1adf4811e36c",
    measurementId: "G-6XD8PNF0Y6"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

