import React, { useEffect } from 'react';
import AOS from 'aos';
import '../styles/About.css';


// Asegurate de crear este archivo con los estilos del HTML

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* ABOUT US */}
      <section className="about-wrapper">
        <div className="about-hero">
           <h2> Seodigital</h2>
          <p>
            A software development partner for bold brands and future-driven companies.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-block">
            <h3>200+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-block">
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-block">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-block">
            <h3>10 Years</h3>
            <p>Creating Impact</p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-item">
            <h4>🔍 Innovation-First Mindset</h4>
            <p>We continuously explore new technologies to deliver products that are not only modern — but future-ready.</p>
          </div>
          <div className="about-item">
            <h4>💼 Enterprise-Grade Delivery</h4>
            <p>From idea to execution, we apply solid architecture, robust security, and scalable infrastructure.</p>
          </div>
          <div className="about-item">
            <h4>⚙️ Agile Execution</h4>
            <p>Our teams work with agile practices, ensuring rapid delivery, transparency, and flexibility.</p>
          </div>
          <div className="about-item">
            <h4>🌎 Global Talent Network</h4>
            <p>We source elite engineers and designers from across the world to bring diverse perspectives to your product.</p>
          </div>
        </div>

        <div className="about-culture">
          <h3>Our Culture. Our Code.</h3>
          <p>
            At SEOdigital, we don't just write code — we build trust, foster creativity, and work with purpose.
            <br />We believe in people, passion, and performance.
          </p>
        </div>

        <div className="about-cta">
          <h4>Ready to build something remarkable?</h4>
          <button>Let’s Talk →</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose" data-aos="fade-up" data-aos-duration="1000">
        <div className="why-container">
          <h3>Why Choose SEOdigital?</h3>
          <div className="why-points">
            <div className="why-item">
              <h4>⚡ Speed & Performance</h4>
              <p>We optimize for scale and speed using modern frameworks like React, Node.js, and Next.js.</p>
            </div>
            <div className="why-item">
              <h4>🔐 Security First</h4>
              <p>Built with encryption, compliance, and data privacy in mind from day one.</p>
            </div>
            <div className="why-item">
              <h4>📈 Proven Growth</h4>
              <p>We’ve helped startups become unicorns and corporations scale smarter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h3>Frequently Asked Questions</h3>

          <div className="faq-item">
            <h4>What industries do you serve?</h4>
            <p>We work with fintech, healthtech, ecommerce, SaaS, logistics, and more.</p>
          </div>

          <div className="faq-item">
            <h4>Can you integrate with our existing tech stack?</h4>
            <p>Yes. We specialize in seamless integration with existing tools, APIs, and legacy systems.</p>
          </div>

          <div className="faq-item">
            <h4>Do you offer ongoing support?</h4>
            <p>Absolutely. We offer maintenance, support, and optimization after launch.</p>
          </div>

          <div className="faq-item">
            <h4>Where is your team located?</h4>
            <p>We are a remote-first company with talent across LATAM, North America, and Europe.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
