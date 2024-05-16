'use client';
import React, { useState, useEffect } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    const userDetails = { username, password };
    console.log('User details:', userDetails);
    onLogin(userDetails); 
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError('');
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true); 

  const handleLogin = (userDetails) => {
    console.log('Logging in with:', userDetails);
    setShowLoginForm(false);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {showLoginForm && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default Login;
