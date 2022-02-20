import ChatRoom from "./pages/chatRoom";
import SignIn from "./pages/signIn";

import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  //put your config here
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
