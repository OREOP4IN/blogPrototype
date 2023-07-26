import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../AuthService';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authenticateUser(username, password)) {
      handleLogin(username, password);
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <header className='App-header'>
        <h2>Login</h2>
      </header>
      
      <form onSubmit={handleSubmit}>
        <input className='Login-form'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input className='Login-form'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className='Log-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;