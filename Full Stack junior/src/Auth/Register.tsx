import React, { useState } from 'react';
import './Register.css'; 

function Register() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.href = '/logIn'; 
    })
    .catch((error) => {
      console.error('Error:', error);

    });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">Name:</label>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        className="input"
      />
      <label className="label">Email:</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        className="input"
      />
      <label className="label">Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">Register</button>
    </form>
  );
}

export default Register;
