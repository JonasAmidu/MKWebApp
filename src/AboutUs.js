import React from 'react';
import './AboutUs.css';
import video from './assets/assets/MKVideo.mp4';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Mac Keating ai. We are dedicated to providing top-notch AI solutions to help businesses
        streamline their operations and innovate in their respective fields.
      </p>
      <p>
        Our team consists of experienced professionals who are passionate about artificial intelligence
        and committed to delivering high-quality services to our clients.
      </p>
      <p>
        Whether you are looking to automate processes, gain insights from data, or develop cutting-edge AI
        applications, we have the expertise to help you achieve your goals.
      </p>

      {/* Video Section */}
      <div className="video-container">
        <video width="60%" height="auto" controls autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUs;

