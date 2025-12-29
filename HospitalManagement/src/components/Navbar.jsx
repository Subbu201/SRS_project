// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <h3>Hospital Management</h3>

      
      </div>

      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/register" className="nav-link">Register</NavLink>
        <NavLink to="/patients" className="nav-link">Patients</NavLink>
        <NavLink to="/appointment" className="nav-link">Appointments</NavLink>
        <NavLink to="/patient" className="nav-link">My Appointments</NavLink>
        <NavLink to="/doctor" className="nav-link">Doctor</NavLink>
        <NavLink to="/reports" className="nav-link">Reports</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
