import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabT79ykUkef23rpx6ek0ZRyIMnKhSNo4",
  authDomain: "talkioo.firebaseapp.com",
  projectId: "talkioo",
  storageBucket: "talkioo.appspot.com",
  messagingSenderId: "1052777790335",
  appId: "1:1052777790335:web:01629fa6bbc9de8523784a",
  measurementId: "G-P8BKKGWZ7B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, auth };