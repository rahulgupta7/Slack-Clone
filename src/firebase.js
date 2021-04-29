import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrM2F1UO8HW8wX-HC2nc_KFL9KxGTotUA",
  authDomain: "slack-clone-b2574.firebaseapp.com",
  projectId: "slack-clone-b2574",
  storageBucket: "slack-clone-b2574.appspot.com",
  messagingSenderId: "287468948020",
  appId: "1:287468948020:web:4dc27f4130b63df4105861",
  measurementId: "G-3R01HX3R8R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;