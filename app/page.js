
"use client";
import React, { useEffect } from 'react';
import './page.css';

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="home-container">
      {/* Add some initial content here to avoid empty div */}
      <h1>Welcome to Terminal GPT</h1>
    </div>
  );
};

export default Home;
