import firebase from 'firebase'
import dotenv from 'dotenv'
dotenv.config()
let config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

let db = firebase.firestore()

export default db
