import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4Kf0sJQQzvhIXmSRYf1RbLR9I_kOEuS4",
  authDomain: "shopping-store-b8367.firebaseapp.com",
  databaseURL: "https://shopping-store-b8367.firebaseio.com",
  projectId: "shopping-store-b8367",
  storageBucket: "shopping-store-b8367.appspot.com",
  messagingSenderId: "212008237246",
  appId: "1:212008237246:web:9d7fcc31dbb83a87ed86ef",
  measurementId: "G-26MZ5PZY91",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
