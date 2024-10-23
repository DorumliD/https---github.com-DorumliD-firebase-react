import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebaseConfig';

function LoginWithGoogle() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in with Google:', result.user);
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

export default LoginWithGoogle;
