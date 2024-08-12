  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getAuth , onAuthStateChanged ,
          createUserWithEmailAndPassword ,
          signInWithEmailAndPassword,
          signOut,
  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore ,
          doc ,
          setDoc,
          getDoc,
          collection,
          addDoc,
          getDocs,
          updateDoc,
          arrayUnion,
          arrayRemove,
          query,
          where,
          deleteDoc,
   } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage ,
           ref ,
           uploadBytes ,
           getDownloadURL,  
          
  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCloIChSGBjrOWO6zIfwhFmxlC-hf8AlD0",
    authDomain: "event-planner-30732.firebaseapp.com",
    projectId: "event-planner-30732",
    storageBucket: "event-planner-30732.appspot.com",
    messagingSenderId: "477461228276",
    appId: "1:477461228276:web:ee748c28518b4af9550ca1",
    measurementId: "G-5GHSRV3MVS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)


  
  const analytics = getAnalytics(app);

  export {auth , db , storage , onAuthStateChanged ,  createUserWithEmailAndPassword ,doc ,
    setDoc,   ref ,
    uploadBytes ,
    getDownloadURL, signInWithEmailAndPassword , signOut , getDoc ,  collection,
    addDoc , getDocs  , updateDoc,
    arrayUnion,
    arrayRemove,   query,
    where,
    deleteDoc,};