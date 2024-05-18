'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
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

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Fetch list of users
      onLogin(response.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    }
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

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div classname="user-grid">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
      <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

const Login = () => {
  const [userDetails, setUserDetails] = useState([]);

  const handleLogin = (users) => {
    console.log('Logged in with:', users);
    setUserDetails(users);
  };

  return (
    <div>
      {!userDetails.length ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="user-grid">
          {userDetails.slice(0, 25).map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Login;
