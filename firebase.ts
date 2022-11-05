import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // apiKey: "AIzaSyCeort8OhtDl8QoLsV9haWooVbGTBk_YoI",
  // authDomain: "netflix-clone-9b93f.firebaseapp.com",
  // projectId: "netflix-clone-9b93f",
  // storageBucket: "netflix-clone-9b93f.appspot.com",
  // messagingSenderId: "199094556379",
  // appId: "1:199094556379:web:a43ebe3e5c937effeddefe",
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
