import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>School Management System</h1>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#activities">Activities</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;