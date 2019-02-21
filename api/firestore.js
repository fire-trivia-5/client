// import firebase from 'firebase'
// import dotenv from 'dotenv'
// dotenv.config()
// let config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID
// }

// firebase.initializeApp(config)

// let db = firebase.firestore()

// export default db





const firebase = require('firebase/app');
require('firebase/firestore');
// require('dotenv').config()
var config = {

  apiKey: "AIzaSyA1z4zJDX3U1RAu4S4Lia5BW1Ex9uT0KVA",
  authDomain: "benk-s-ban.firebaseapp.com",
  databaseURL: "https://benk-s-ban.firebaseio.com",
  projectId: "benk-s-ban",
  storageBucket: "benk-s-ban.appspot.com",
  messagingSenderId: "487461851153"

};
firebase.initializeApp(config)
var db = firebase.firestore();
export default db
// import firebase from 'firebase/ap
