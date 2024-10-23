import React from 'react';
import LoginWithGoogle from '../register/LoginWithGoogle';
import LoginWithGitHub from '../register/LoginWithGithub';
import Register from '../register/Register';

function Authentication() {
  return (
    <div>
      <h2 style={{color: 'red'}}>Sign In</h2>
      <LoginWithGoogle />
      <LoginWithGitHub />
      <Register/>
      {/* Другие методы аутентификации, такие как Email/Password, могут быть добавлены здесь */}
    </div>
  );
}

export default Authentication;
