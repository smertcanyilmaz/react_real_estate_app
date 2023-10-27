import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDskyVktJyirfaJAuXaEeBkyZQ9nOXqrpE",
  authDomain: "real-estate-app-b1e5c.firebaseapp.com",
  projectId: "real-estate-app-b1e5c",
  storageBucket: "real-estate-app-b1e5c.appspot.com",
  messagingSenderId: "591740044627",
  appId: "1:591740044627:web:9cbde1af3f282e32ba8da6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
