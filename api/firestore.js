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

// import firebase from 'firebase'
// import dotenv from 'dotenv'
// dotenv.config()
// let config = {
//   apiKey: 'AIzaSyBA9NHOXB9Yaa7xWu3jxUyqlSARN9992Us',
//   authDomain: 'afire-trivia-5.firebaseapp.com',
//   databaseURL: 'https://fire-trivia-5.firebaseio.com',
//   projectId: 'fire-trivia-5',
//   storageBucket: 'fire-trivia-5.appspot.com',
//   messagingSenderId: 378872832063
// }




const firebase = require('firebase/app');
require('firebase/firestore');
// require('dotenv').config()
var config = {

  apiKey: 'AIzaSyBA9NHOXB9Yaa7xWu3jxUyqlSARN9992Us',
  authDomain: 'afire-trivia-5.firebaseapp.com',
  databaseURL: 'https://fire-trivia-5.firebaseio.com',
  projectId: 'fire-trivia-5',
  storageBucket: 'fire-trivia-5.appspot.com',
  messagingSenderId: 378872832063

};
firebase.initializeApp(config)
var db = firebase.firestore();
export default db
// import firebase from 'firebase/ap
