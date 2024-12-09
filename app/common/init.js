import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


export default function()  {
    const firebaseConfig = {
        apiKey: "AIzaSyDffUW2s5U5Z-F2Pw8jO0ArPVG6Cw4w3aQ",
        authDomain: "examencloud-a9fd4.firebaseapp.com",
        projectId: "examencloud-a9fd4",
        storageBucket: "examencloud-a9fd4.firebasestorage.app",
        messagingSenderId: "426023937805",
        appId: "1:426023937805:web:61f0d1d916da77b4aeb244",
        measurementId: "G-WEK85JTGMV"
      };


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
   

    return {auth, db}
}