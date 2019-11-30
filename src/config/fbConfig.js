import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCscKFwlkj21aMtyrXmmdxnPNuoxIiKHPE",
    authDomain: "react-mock-marioplan.firebaseapp.com",
    databaseURL: "https://react-mock-marioplan.firebaseio.com",
    projectId: "react-mock-marioplan",
    storageBucket: "react-mock-marioplan.appspot.com",
    messagingSenderId: "306482844688",
    appId: "1:306482844688:web:ae5c6b626e0685909ae695",
    measurementId: "G-DP7DD8JS95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.analytics();

  export default firebase;