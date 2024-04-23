import React from "react";

const HeroHeader = () => {
  return (
    <header className="hero">
      {/* <video autoPlay loop muted className="hero-video">
        <source src="https://www.youtube.com/watch?v=y-x2BLPyWGk&ab_channel=DEWARCHIDESIGNS" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="hero-content">
        <div className="container">
          {/* Apply the title-word class and its variations to the hero-title */}
          <h2 className="title">
            <span className="title-word title-word-1">KEJANI</span>
            <span className="title-word title-word-2">_</span>
            <span className="title-word title-word-3">REAL</span>
            <span className="title-word title-word-4"> ESTATE</span>
          </h2>
          <p className="hero-subtitle">Provide better housing for the world</p>
          <a href="#home" className="hero-button">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
