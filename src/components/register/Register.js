import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setError(null);
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2 id='ok' style={{color: 'blue', backgroundColor: 'aqua'}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
    </div>
  );
}

export default Register;
