import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#1f1f1f', color: '#e0e0e0' }}>
      <Link to="/" style={{ margin: '0 1rem', color: '#e0e0e0', textDecoration: 'none' }}>Home</Link>
      <Link to="/signup" style={{ margin: '0 1rem', color: '#e0e0e0', textDecoration: 'none' }}>Sign Up</Link>
      <Link to="/login" style={{ margin: '0 1rem', color: '#e0e0e0', textDecoration: 'none' }}>Login</Link>
      <Link to="/inventory" style={{ margin: '0 1rem', color: '#e0e0e0', textDecoration: 'none' }}>Inventory</Link>
    </nav>
  );
}

export default Navbar;
