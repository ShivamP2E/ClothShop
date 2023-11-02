import {initializeApp } from 'firebase/app';
import {
    getAuth, 
    
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCJvBbVnqH-Jw7kYLjdeU95jHS3sniqrgE",
    authDomain: "clothshop-efbf2.firebaseapp.com",
    projectId: "clothshop-efbf2",
    storageBucket: "clothshop-efbf2.appspot.com",
    messagingSenderId: "511452739043",
    appId: "1:511452739043:web:0950d6a48f55090181dcd6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
   prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }
    catch(error){
        console.log('error creating the user', error.message);
    }
    }
    return userDocRef;
  }