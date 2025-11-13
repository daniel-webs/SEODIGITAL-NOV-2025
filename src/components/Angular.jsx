import React from "react";
import "../styles/Csharp.css";
import csharpLogo from "../assets/csharp-logo.png"; // imagen del hero (ícono C#)
import devTeam from "../assets/dev-team.jfif"; // imagen de desarrolladores
import clientImg from "../assets/client.jfif"; // imagen testimonial

const CSharp = () => {
  return (
    <div className="csharp-page">
      {/* ===== HERO ===== */}
      <section className="csharp-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE C# CON TALENTO NEARSHORE</p>
          <h1>
            Escale su desarrollo de <span className="highlight">C#</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de C# ya tienen 500+ compromisos activos. 
            Por lo general, entregamos nuestros proyectos en 2 semanas, para que pueda 
            comenzar a acelerar resultados sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de C#</button>
        </div>

        <div className="hero-img">
          <img src={csharpLogo} alt="C# Logo" />
        </div>
      </section>

      {/* ===== LOGOS ===== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/microsoft.png" alt="Microsoft" />
            <img src="/logos/adobe.png" alt="Adobe" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <section className="main-content">
        <div className="main-left">
          <h2>Servicios de desarrollo de C# que brindamos</h2>

          <div className="services-grid">
            <div className="service-item">
              <h3>Desarrollo de C# personalizado</h3>
              <p>
                Creamos soluciones empresariales adaptadas a sus necesidades, 
                con arquitectura sólida, alta escalabilidad y rendimiento.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de aplicaciones web en C#</h3>
              <p>
                Diseñamos aplicaciones web interactivas y seguras usando ASP.NET Core 
                y las mejores prácticas del ecosistema Microsoft.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de APIs RESTful</h3>
              <p>
                Construimos APIs rápidas y confiables para conectar sus sistemas 
                internos y externos de forma segura y eficiente.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de aplicaciones móviles con C#</h3>
              <p>
                Usamos .NET MAUI y Xamarin para crear apps multiplataforma con una 
                sola base de código, reduciendo tiempo y costos.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de software empresarial en C#</h3>
              <p>
                Implementamos ERP, CRM y soluciones SaaS robustas usando la 
                potencia del framework .NET y Azure Cloud.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de juegos con C#</h3>
              <p>
                Creamos experiencias interactivas con Unity y C#, integrando gráficos 3D 
                y físicas avanzadas para juegos de alto nivel.
              </p>
            </div>
            <div className="service-item">
              <h3>Integraciones y migraciones</h3>
              <p>
                Modernizamos sistemas heredados, migramos datos y optimizamos procesos 
                con integraciones seguras y eficientes.
              </p>
            </div>
            <div className="service-item">
              <h3>Desarrollo de IoT y Software Embebido</h3>
              <p>
                Usamos C# para construir soluciones IoT escalables y seguras 
                que conectan hardware con la nube.
              </p>
            </div>
          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="main-right">
          <div className="sidebar-section">
            <h4>Servicios relacionados</h4>
            <ul>
              <li>Desarrollo .NET</li>
              <li>Desarrollo de APIs</li>
              <li>Consultoría en Azure</li>
              <li>Desarrollo de Backend</li>
            </ul>
          </div>

          <div className="sidebar-section quote">
            <p className="quote-text">
              “Colaborar con este equipo nos permitió escalar nuestros proyectos 
              de software tres veces más rápido.”
            </p>
            <span className="quote-author">CTO - Fintech LATAM</span>
          </div>

          <div className="sidebar-section">
            <img src={clientImg} alt="Client" />
          </div>
        </aside>
      </section>

      {/* ===== TESTIMONIO / CTA ===== */}
      <section className="case-study">
        <div className="case-card">
          <img src={devTeam} alt="Developers" />
          <div className="case-text">
            <h3>Historia de éxito: Autodesk</h3>
            <p>
              “El equipo de ingeniería de BairesDev fue fundamental para la expansión 
              de nuestras soluciones .NET en todo el mundo.”
            </p>
            <button className="cta-btn">Ver Caso</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSharp;
