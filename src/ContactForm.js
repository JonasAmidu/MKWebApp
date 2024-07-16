import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (name, email, message) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!emailRegex.test(email)) errors.email = "Email is not valid.";
    if (!message) errors.message = "Message is required.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const errors = validate(details.name, details.email, details.message);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setErrors({});
        e.target.reset();
      } else {
        setStatus("Error sending email. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending email. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        {errors.name && <p className="error">{errors.name}</p>}
        <input type="email" name="email" placeholder="Your Email" />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea name="message" placeholder="Your Message" rows="5"></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <input type="submit" value="Send" />
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default ContactForm;


