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

// const firebaseConfig = {
//   apiKey: "AIzaSyCvBC6dse5PuOUsTCj0H88hePlWPqoOB8M",
//   authDomain: "real-estate-2-bd95b.firebaseapp.com",
//   projectId: "real-estate-2-bd95b",
//   storageBucket: "real-estate-2-bd95b.appspot.com",
//   messagingSenderId: "508363569510",
//   appId: "1:508363569510:web:573a797c0232e3bf65b0a7",
//   measurementId: "G-5YJKGZEGD2",
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
