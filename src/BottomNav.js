import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaDollarSign } from 'react-icons/fa'; // Import the dollar sign icon
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
      <Link to="/investors" className="nav-link"> {/* New link for Investors Page */}
        <FaDollarSign /> <span>Investors</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
