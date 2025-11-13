import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>
          Accelerate Your <br />
          Roadmap With Our <br />
          <span className="highlight-orange">
            Vetted Nearshore <br /> Tech Talent.
          </span>
        </h1>
        <p>
          Access 4,000+ timezone-aligned software engineers <br />
          with experience in 100+ technologies.
        </p>
        <button className="hero-button">Schedule a Call</button>
      </div>

      <div className="hero-right">
        <img
          src={heroImg}
          alt="Professional software team collaborating in an office"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
