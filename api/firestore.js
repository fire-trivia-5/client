import firebase from 'firebase'
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

var config = {
  apiKey: 'AIzaSyARK9Hf61nYGXXyaV0s7xf9cKp4VubRhBw',
  authDomain: 'active-fox-1549509381724.firebaseapp.com',
  databaseURL: 'https://active-fox-1549509381724.firebaseio.com',
  projectId: 'active-fox-1549509381724',
  storageBucket: '',
  messagingSenderId: '299733928822'
}

firebase.initializeApp(config)

let db = firebase.firestore()

export default db

// import firebase from 'firebase'
// require('dotenv').config()

// let config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID
// }

// const firebase = require('firebase/app')
// require('firebase/firestore')
// // require('dotenv').config()
// firebase.initializeApp(config)
// var db = firebase.firestore()
// export default { db }
// import firebase from 'firebase/ap
