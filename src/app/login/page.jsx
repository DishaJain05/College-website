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
  const [showLoginForm, setShowLoginForm] = useState(true); // Initially true to show the login form

  const handleLogin = (userDetails) => {
    // Perform any additional login logic here
    console.log('Logging in with:', userDetails);
    // Close the login form after successful login
    setShowLoginForm(false);
  };

  useEffect(() => {
    // Perform any necessary actions when navigating to the login page
    // For example, check if the user is already logged in
    // and redirect them to another page if necessary
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div>
      {showLoginForm && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default Login;
