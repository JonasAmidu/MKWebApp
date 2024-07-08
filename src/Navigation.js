import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">
        <FaHome /> Home
      </Link>
      <Link to="/about" className="nav-link">
        <FaInfoCircle /> About Us
      </Link>
      <Link to="/projects" className="nav-link">
        <FaProjectDiagram /> Current Projects
      </Link>
      <Link to="/contact" className="nav-link">
        <FaEnvelope /> Contact Form
      </Link>
    </nav>
  );
};

export default Navigation;

