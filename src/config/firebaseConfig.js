import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyBkXDw8xo8ejiuix0PKWT6iOQbh18NfO0A",
  authDomain: "dear-diary-6bc34.firebaseapp.com",
  projectId: "dear-diary-6bc34",
  storageBucket: "dear-diary-6bc34.appspot.com",
  messagingSenderId: "1015276434426",
  appId: "1:1015276434426:web:682f81861020acbecd2a43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;