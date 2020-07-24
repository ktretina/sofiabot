import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCfGRezFSoSXMnX3kRHmVf3oDfTy3Ctxgg",
  authDomain: "covid-chatbot-development.firebaseapp.com",
  databaseURL: "https://covid-chatbot-development.firebaseio.com",
  projectId: "covid-chatbot-development",
  storageBucket: "covid-chatbot-development.appspot.com",
  messagingSenderId: "221920980822",
  appId: "1:221920980822:web:9ed4e46ab5183001bf30f7",
  measurementId: "G-ZVRDR0S2W0"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
