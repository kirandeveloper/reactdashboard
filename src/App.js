// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UserApi';
import Nav from './nav';
import Login from './Login';
import Home from './home';
import EmployeeList from './EmployeeList';
import Welcome from './Welcome';

function App() {
  // Define state using the useState hook
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Perform login logic here (e.g., validation, API call)
    console.log('Email:', email);
    console.log('Password:', password);
    
    // For demonstration purposes, we'll set the login state to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Define the increment function
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
