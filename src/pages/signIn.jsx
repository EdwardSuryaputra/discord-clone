import firebase from 'firebase/compat/app';
import React from 'react';
import { AiFillAliwangwang } from "react-icons/ai";

const SignIn = ({auth}) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }

    return(
        <div className="sign-in">
            <SignInIcon icon={<AiFillAliwangwang size="100"/>}/>
            <button className="sign-in-button" onClick={signInWithGoogle}><b>Sign in with Google</b></button>
        </div>
    );
};

const SignInIcon = ({icon}) => (
    <div className="sign-in-icon">
        {icon}
    </div>
);

export default SignIn;