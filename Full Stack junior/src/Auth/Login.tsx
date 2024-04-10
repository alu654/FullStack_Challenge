import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      if (data.status === 'success') {
        localStorage.setItem('token', data.user.token); 
        window.location.href = '/home'; 
      } else {
      
        console.error('Error:', data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">Email:</label>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        className="input"
      />
      <label className="label">Password:</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">Login</button>
    </form>
  );
}

export default Login;
