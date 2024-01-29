import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB-BecHdayQp1rtq4nLUQMoCplL6FEf6RM",
    authDomain: "disneyplus-clone-a69.firebaseapp.com",
    projectId: "disneyplus-clone-a69",
    storageBucket: "disneyplus-clone-a69.appspot.com",
    messagingSenderId: "1079527817220",
    appId: "1:1079527817220:web:150253f881d3e861e1b551",
    measurementId: "G-KHRT80200X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export{auth, provider,storage}
  export default db;