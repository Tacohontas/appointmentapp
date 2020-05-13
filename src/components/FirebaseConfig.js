import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN5Xjmfnbio-SZeW0GWMMmRImv4VdDEdY",
  authDomain: "klassprojekt-5ebc9.firebaseapp.com",
  databaseURL: "https://klassprojekt-5ebc9.firebaseio.com",
  projectId: "klassprojekt-5ebc9",
  storageBucket: "klassprojekt-5ebc9.appspot.com",
  messagingSenderId: "478018765066",
  appId: "1:478018765066:web:63a5643b3d87c48a277af3",
  measurementId: "G-GL8SP1Y0C3",
};

firebase.initializeApp(firebaseConfig);

export const googleProvier = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;
