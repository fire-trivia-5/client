/* eslint-disable */
const firebase = require("firebase/app");
require("firebase/firestore");  

var config = {

    apiKey: 'AIzaSyBA9NHOXB9Yaa7xWu3jxUyqlSARN9992Us',
    authDomain: 'afire-trivia-5.firebaseapp.com',
    databaseURL: 'https://fire-trivia-5.firebaseio.com',
    projectId: 'fire-trivia-5',
    storageBucket: 'fire-trivia-5.appspot.com',
    messagingSenderId: 378872832063
  
  };

firebase.initializeApp(config);

var db = firebase.firestore();
export default db