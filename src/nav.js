// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">MyApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employees">NestedComponent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FormControl">FormControl</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FormunControl">FormunControl</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ItemList">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Animation">Animation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Map">Map</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Table">Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Hooksex">Hooks</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
