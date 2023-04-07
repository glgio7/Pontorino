// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_API_KEY,
	authDomain: "pontorino-cd1a8.firebaseapp.com",
	projectId: "pontorino-cd1a8",
	storageBucket: "pontorino-cd1a8.appspot.com",
	messagingSenderId: "218328967778",
	appId: "1:218328967778:web:8e5003d010ad49935c3f3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
