import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './assets/assets/Ai.json'; // Adjust path as needed
import logo1 from './assets/assets/apple-logo.svg'; // Adjust path as needed
import logo2 from './assets/assets/android-logo.svg'; // Adjust path as needed
import './Home.css';

const Home = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });

    // Clean up function to stop animation when component unmounts
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="home-container">
      <img src={logo1} alt="Apple Logo" className="logo" />
      <h1>Mac Keating.ai</h1>
      <div ref={animationContainer} className="lottie-container"></div>
      <img src={logo2} alt="Android Logo" className="logo" />
      <h2>Providing AI Solutions</h2>
    </div>
  );
};

export default Home;

