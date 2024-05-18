'use client';
import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    course: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.status === 201) {
        alert('Signup successful!');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="signupContainer">
      <h2>Signup Form</h2>
      {error && <p>{error}</p>}
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
