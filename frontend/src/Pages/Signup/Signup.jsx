// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Both fields are required');
      return;
    }

    // Mock sign-up validation
    navigate('/explanation');  // Navigate to selection page
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => navigate('/login')}>Back</button>
    </div>
  );
};

export default Signup;
