import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Login from './components/Login';
import Projects from './components/Projects';
import NoPage from './components/NoPage';

import photo from './images/logo hme transparent.png';
import icon from './images/inokar.png';


import './App.css';

import { authenticateUser } from './AuthService';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [hover, setHover] = useState(false);

  const handleLogin = (username, password) => {
    if (
      <authenticateUser />
    ) {
      setIsLoggedIn(true);
      setLoggedInUsername(username);
    } 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername('');
    window.location.href = '/';
  };

  return (
    
    <Router>
      <div className='App-default-container'>
      {!isLoggedIn ? !null : (
      <>
      
      <div className='Sidebar-container'
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}>
      <div className="Sidebar">
        <img src={icon} alt="icon" className='Sidebar-icon' />
      
      {hover &&
      <div className='Sidebar-link'>
      <nav>
      <ul>
        {!isLoggedIn ? null : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={handleLogout} className='Log-button'>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
    </div>
      }
      
      </div>
      <img src={photo} alt="Photo" className='App-logo' />
      </div>
      </>
      )}
      

      <Routes>
      
        {!isLoggedIn ? (
          <Route
            path="/"
            element={<Login handleLogin={handleLogin} />}
          />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile username={loggedInUsername}/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </>
        )}
        <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
