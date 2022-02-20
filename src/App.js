import ChatRoom from "./pages/chatRoom";
import SignIn from "./pages/signIn";

import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBFGMiWOIfGIj3nvdAe1Dv54oEn02gekAg",
  authDomain: "superchat-app-5dba0.firebaseapp.com",
  projectId: "superchat-app-5dba0",
  storageBucket: "superchat-app-5dba0.appspot.com",
  messagingSenderId: "761604098624",
  appId: "1:761604098624:web:c8c1f426cb72d2abe6eda5",
  measurementId: "G-0LT8W0DY9P"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore}/> : <SignIn auth={auth}/>}
      </section>
    </div>
  );
}

export default App;
