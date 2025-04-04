// src/components/Auth/Signup.js
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate ();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8011/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
       
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

      const data = await response.json();
      console.log('User created:', data);
      navigate('/login'); 
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
