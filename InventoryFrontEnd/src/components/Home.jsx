import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to GAME PORT Inventory Management System</h1>
            
            <h2>View inventory items here.</h2>
            <Link to="/inventory">Go to Inventory</Link>
            <h2>Create new account or Login</h2>
            <Link to="/signup">New Account</Link>
            <br />
            <br />
            <h2>Already have an account?</h2>
            <Link to="/login">Login</Link>
            
        
        
        </div>
    );
}

export default Home;