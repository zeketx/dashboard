import { initializeApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
/***
 * creating auth login only 
 * will add microsoft auth and SSO later
 * */ 

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

let firebaseApp

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig)
}

export const app = firebaseApp
export const auth = getAuth(app)