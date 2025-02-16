// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // useNavigate hook to handle navigation

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Both fields are required');
      return;
    }

    // Mock login validation
    if (email === 'user@example.com' && password === 'password') {
      navigate('/wheel');  // Navigate to Dashboard page
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
    </div>
  );
};

export default Login;
