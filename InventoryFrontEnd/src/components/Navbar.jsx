import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: '1rem', background: '#eee' }}>
            <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
            <Link to="/signup" style={{ margin: '0 1rem' }}>Sign Up</Link>
            <Link to="/login" style={{ margin: '0 1rem' }}>Login</Link>
            <Link to="/inventory" style={{ margin: '0 1rem' }}>Inventory</Link>
      </nav>
    ); 
}

export default Navbar;