import React from 'react';
import '../styles/Angular.css';

// Importa tus imágenes (colócalas en src/assets/)

import pythonLogo from '../assets/pyton-logo.png';
import neutroLogo from '../assets/111.png';
import aluraLogo from '../assets/alura.jfif';
import startupLogo from '../assets/startup.png';
import googleLogo from '../assets/google.png';
import pinterestLogo from '../assets/pinterest.png';
import microsoftLogo from '../assets/microsoft.png';
import teamImage from '../assets/django-team.jfif';
import authorImage from '../assets/author.jfif';

export default function Python() {
  return (
    <div className="page">
      {/* Header */}
      
        <div className="container header-content">
          <div className="header-text">
            <h1 className="main-title">
              Trabaje con <span className="highlight">Gustavo Gravagna experto en Python</span> en los que confían los mejores equipos tecnológicos del mundo.
            </h1>
            <p className="subtitle">
              Hemos conectado a más de 500 empresas con desarrolladores senior de Python. 
              Nuestros desarrolladores son revisados por expertos en desarrollo de Python. 
              Trabaja con desarrolladores de Python de élite.
            </p>
            <div className="clutch-rating">
              
              <span className="clutch-text">Clutch</span>
              <span className="stars">★★★★★</span>
              <span className="rating">4.9/5</span>
            </div>
            <img src={pythonLogo} alt="Python" className="python-logo" />
          </div>

          <form className="contact-form">
            <h3 className="form-title">Obtenga ayuda experta para su proyecto Python</h3>
            <input type="text" placeholder="Nombre completo" className="form-input" />
            <input type="email" placeholder="Correo electrónico" className="form-input" />
            <input type="tel" placeholder="Teléfono (opcional)" className="form-input" />
            <button type="submit" className="submit-btn">
              Póngase en contacto con su proyecto
            </button>
          </form>
        </div>
     
      {/* Logos de confianza */}
      <section className="trust-bar">
        <div className="container trust-logos">
          <p className="trust-text">CON LA CONFIANZA DE LOS LÍDERES MUNDIALES</p>
          <div className="logos-grid">
            <img src={neutroLogo} alt="Neutro" />
            <img src={aluraLogo} alt="Alura" />
            <img src={startupLogo} alt="Startup" />
            <img src={googleLogo} alt="Google" />
            <img src={pinterestLogo} alt="Pinterest" />
            <img src={microsoftLogo} alt="Microsoft" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container main-grid">
          {/* Izquierda */}
          <div>
            <h2 className="section-title">
              Probablemente hayas utilizado productos creados por nuestros desarrolladores de Python.
            </h2>
            <p className="section-text">
              Desde startups en crecimiento hasta empresas Fortune 500, nuestros desarrolladores han ayudado a construir 
              algunas de las aplicaciones Python más utilizadas del mundo.
            </p>

            <ul className="features-list">
              <li>Aplicaciones web personalizadas y de alto rendimiento</li>
              <li>Plataformas SaaS escalables con Django/Flask</li>
              <li>Automatización de procesos y scripts</li>
              <li>APIs RESTful y microservicios</li>
              <li>Análisis de datos y machine learning</li>
              <li>Proyectos de migración y modernización empresarial</li>
            </ul>

            <img src={teamImage} alt="Equipo" className="team-image" />

            <blockquote className="testimonial">
              “Sus ingenieros se desempeñan con estándares muy altos. Hemos tenido una relación sólida durante casi 7 años.”
            </blockquote>

            <div className="author">
              <img src={authorImage} alt="Fernando Pérez" className="author-img" />
              <div>
                <p className="author-name">Fernando Pérez</p>
                <p className="author-role">CTO en Neutro</p>
              </div>
            </div>
          </div>

          {/* Derecha */}
          <div>
            <h2 className="section-title">
              Por qué los líderes tecnológicos eligen nuestros equipos de desarrollo de Python:
            </h2>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">5+ años</div>
                <div className="stat-label">Promedio de experiencia en Python</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">Proyectos Python entregados</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-label">Tasa de retención de clientes</div>
              </div>
            </div>

            <div className="highlight-box">
              Disponibilidad inmediata de ingenieros senior con experiencia en Python. 
              Sin procesos de contratación prolongados.
            </div>

            <button className="outline-btn">
              Habla con nuestro equipo
            </button>
          </div>
        </div>
      </main>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <button className="cta-btn">Hable con nuestro equipo</button>
        </div>
      </section>
    </div>
  );
}