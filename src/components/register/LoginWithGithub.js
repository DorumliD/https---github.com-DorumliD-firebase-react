    import React from 'react';
    import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
    import app from '../../firebaseConfig';

    function LoginWithGitHub() {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    const signInWithGitHub = async () => {
        try {
        const result = await signInWithPopup(auth, provider);
        console.log('User signed in with GitHub:', result.user);
        } catch (error) {
        console.error('Error during GitHub sign-in:', error.message);
        }
    };

    return (
        <button onClick={signInWithGitHub}>Sign in with GitHub</button>
    );
    }

    export default LoginWithGitHub;
