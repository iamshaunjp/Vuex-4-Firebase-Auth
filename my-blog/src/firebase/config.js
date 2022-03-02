import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqt4vZmprIeBdUXoXxDVBLXsKR6ssDUVA",
  authDomain: "hometest-6317c.firebaseapp.com",
  projectId: "hometest-6317c",
  storageBucket: "hometest-6317c.appspot.com",
  messagingSenderId: "653715737339",
  appId: "1:653715737339:web:45c281c1f30d4b23d9be5e",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
