import firebase from 'firebase';
import 'firebase/firestore';
import {initFirestorter, Collection} from 'firestorter';

// Initialize firebase app
firebase.initializeApp({
  apiKey: "AIzaSyAW_MLxU9hd5Fa0KAwpwXSg_mxrMEVkAz4",
  authDomain: "react-test-48c96.firebaseapp.com",
  databaseURL: "https://react-test-48c96.firebaseio.com",
  projectId: "react-test-48c96",
  storageBucket: "react-test-48c96.appspot.com",
  messagingSenderId: "282516942110"
});

// Initialize `firestorter`
initFirestorter({firebase: firebase});

// Define collection
export const posts = new Collection('posts');
