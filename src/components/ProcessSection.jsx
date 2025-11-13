// src/components/ProcessSection.jsx
import React, { useRef } from "react";

import "../styles/ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process-container">
      <div className="process-image">
        <h1>
          Our process. <br />
          Simple, <br />
          seamless, <br />
          <span className="dot">streamlined.</span>
        </h1>
        <img src= " C:\Users\Usuario\Documents\gustavo\src\assets\cafe.jpg" alt="Man with coffee" /> 
      </div>

      <div className="process-content">
     

        <div className="steps">
          <div className="step">
            <div className="icon">📞</div>
            <div className="step-text">
              <h4>STEP 1</h4>
              <h3>Join exploration call.</h3>
              <p>
                Tell us more about your business on a discovery call. We’ll
                discuss team structure and approach, success criteria, timescale,
                budget, and required skill sets to see how we can help.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="icon">🗓️</div>
            <div className="step-text">
              <h4>STEP 2</h4>
              <h3>Discuss solution and team structure.</h3>
              <p>
                In a matter of days, we will finalize your project specifications,
                agree on an engagement model, select and onboard your team.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="icon">🚀</div>
            <div className="step-text">
              <h4>STEP 3</h4>
              <h3>Get started and track performance.</h3>
              <p>
                Once we’ve agreed on milestones, we’ll immediately get to work.
                We’ll track progress, report updates, and continuously adapt to
                your needs.
              </p>
              <button className="cta-button">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
