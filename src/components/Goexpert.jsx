import React from "react";
import "../styles/Secciones.css";

const GoExpertsPage = () => {
  return (
    <div className="go-page">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Trabaje con expertos en <span>Go</span> en los que confían los mejores equipos tecnológicos del mundo.
          </h1>
          <p>
            Nuestros desarrolladores de Go han trabajado con equipos líderes del Fortune 500. 
            Sabemos cómo crear productos de alto impacto y escalables para las principales marcas del mundo.
          </p>

          <div className="hero-rating">
            <div className="rating-item">
              <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Clutch" />
              <p><strong>Clutch</strong><br />4.9/5 ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="rating-item">
              <img src="https://go.dev/images/go-logo-white.svg" alt="Go logo" />
            </div>
          </div>
        </div>

        <div className="hero-form">
          <h3>Obtén ayuda experta para tu proyecto de Go.</h3>
          <form>
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Describe tu proyecto"></textarea>
            <button type="submit">Requiere evaluación de proyecto</button>
          </form>
        </div>
      </section>

      {/* ===== LOGOS ===== */}
      <section className="logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/7_Post.png" alt="7Post" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Autodesk_logo.svg" alt="Autodesk" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Pinterest_Logo.svg" alt="Pinterest" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
      </section>

      {/* ===== SECTION: Productos ===== */}
      <section className="productos">
        <div className="productos-texto">
          <h2>Probablemente hayas utilizado productos creados por nuestros desarrolladores de Go.</h2>
          <p>
            Nuestro equipo ha contribuido al desarrollo de sistemas de alto rendimiento y soluciones escalables 
            para startups y corporaciones globales. Nos especializamos en crear infraestructuras robustas con Go, 
            enfocándonos en rendimiento, seguridad y calidad de código.
          </p>

          <ul>
            <li>Desarrollo de APIs y Microservicios</li>
            <li>Migración de sistemas monolíticos</li>
            <li>Plataformas distribuidas y escalables</li>
            <li>Integración de DevOps y CI/CD</li>
            <li>Infraestructura basada en la nube</li>
          </ul>
        </div>

        <div className="productos-imagen">
          <img src="https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?auto=format&fit=crop&w=800&q=80" alt="Equipo trabajando" />
        </div>
      </section>

      {/* ===== TESTIMONIO ===== */}
      <section className="testimonio">
        <blockquote>
          “Sus ingenieros se desempeñan con estándares muy altos. Hemos tenido una relación sólida durante casi 7 años.”
        </blockquote>
        <div className="cliente">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" />
          <div>
            <p className="nombre">Rafael M.</p>
            <p className="cargo">CTO, WorldTech</p>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ ELEGIR ===== */}
      <section className="porque">
        <h2>Por qué los líderes tecnológicos eligen nuestros equipos de Go:</h2>

        <div className="porque-items">
          <div className="porque-item">
            <h3>Talento validado</h3>
            <p>Solo los mejores ingenieros de Go, evaluados técnica y culturalmente.</p>
          </div>
          <div className="porque-item">
            <h3>Escalabilidad</h3>
            <p>Podemos integrar uno o varios desarrolladores según las necesidades del proyecto.</p>
          </div>
          <div className="porque-item">
            <h3>Entrega continua</h3>
            <p>Garantizamos desarrollo ágil y resultados visibles desde las primeras semanas.</p>
          </div>
        </div>

        <button className="btn-verde">Hable con nuestro equipo</button>
      </section>
    </div>
  );
};

export default GoExpertsPage;
