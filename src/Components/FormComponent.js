// FormComponent.js
import React, { useState } from 'react';
import './Style.css';

const  FormComponent = () => {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <form className="responsive" onSubmit={handleSubmit}>
      <div className="text-area">
        <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
        <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
        <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
         <div className="text-area1">
            <button type="submit">Submit</button>
          </div>
      </div>
      
    </form>
  );
};

export default FormComponent;
