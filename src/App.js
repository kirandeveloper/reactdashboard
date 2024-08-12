// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UserApi';
import Nav from './nav';
import Login from './Login';
import Home from './home';
import EmployeeList from './EmployeeList';
import FormControl from './FormControl';
import FormunControl from './FormunControl';
import ItemList from './ItemList';
import Animation from './Animation';
import Map from './map';
import Table from './tableex';
import Hooksex from './Hooksex';
import './App.css';

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
          <Route path="/FormControl" element={<FormControl />} />
          <Route path="/FormunControl" element={<FormunControl />} />
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/Animation" element={<Animation />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Hooksex" element={<Hooksex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
