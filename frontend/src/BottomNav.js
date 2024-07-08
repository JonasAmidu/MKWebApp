import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-link">
        <FaHome /> <span>Home</span>
      </Link>
      <Link to="/about" className="nav-link">
        <FaInfoCircle /> <span>About Us</span>
      </Link>
      <Link to="/projects" className="nav-link">
        <FaProjectDiagram /> <span>Projects</span>
      </Link>
      <Link to="/contact" className="nav-link">
        <FaEnvelope /> <span>Contact</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

