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

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
          await userRef.set({
            displayName,
            email,
            photoURL,
            ...additionalData
          });
        } catch (error) {
          console.error("Error creating user document", error);
        }
      }
      return getUserDocument(user.uid);
    };
    const getUserDocument = async uid => {
      if (!uid) return null;
      try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
          uid,
          ...userDocument.data()
        };
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };


    firebase.initializeApp(firebaseConfig);
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

