import React, { useState } from "react";
import "./InvestorsPage.css"; // Assuming you have the CSS saved as a separate file.

function InvestorsPage() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "COMING SOON",
    email: "COMING SOON",
    message: "COMING SOON",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus("Your inquiry has been submitted successfully!");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Please fill out all fields.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Investors Relations</h1>
      <p>We value our investors. Please fill out the form below and our team will get back to you. We are working hard 
to create a new digital method of investing directly into the company where we will issue you shares and a certificate with a unique token which can be redeemed by contacting Mac Keating Limited. Exciting Investment Opportunity – Coming Soon!

We’re launching a groundbreaking mobile app that will transform how you invest in private companies. Enjoy seamless access to investments, real-time tracking, digital certificates, and enhanced security, all from your device. Stay tuned for more updates and get ready to experience a new era of investment convenience and transparency!

Thank you for your interest! </p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>

      {status && (
        <div className={status.includes("successfully") ? "status" : "error"}>
          {status}
        </div>
      )}
    </div>
  );
}

export default InvestorsPage;
