import React from "react";
import '../styles/MegaMenu.css'; // Puedes usar el mismo CSS base para megamenús

const MegaMenu3 = () => {
  return (
    <div className="mega-menu" id="mega-menu-industries">
      <div className="mega-menu-inner-content">
        
        <div className="mega-column left-column">
          <h3>Industrias.</h3>
          <ul>
            <li>
              <p>Hemos entregado 1250+ proyectos <br/> en 130+ sectores. ¿Experiencia en <br/> su industria? Lo tenemos.</p>
            </li>
            {/* Si hubiera enlaces directos en esta columna, irían aquí */}
          </ul>

          <div className="client-quote">
            <img src="/path/to/iqvia-logo.png" alt="IQVIA Logo" /> {/* Reemplaza con la ruta real de tu logo */}
            <p>Escalamos las plataformas de <br/> investigación clínica de IQVIA con React. <a href="#">Lee el estudio de caso.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Aquí no hay un título específico como "TOP SOLUTIONS", así que lo dejamos vacío o lo ajustamos */}
          <ul>
            <li><a href="#">Agricultura</a></li>
            <li><a href="#">Banca</a></li>
            <li><a href="#">Finanzas</a></li>
            <li><a href="#">Seguro</a></li>
            <li><a href="#">Bien inmueble</a></li>
            <li><a href="#">Telecomunicaciones</a></li>
            <li><a href="#">Todas las industrias →</a></li> {/* Este enlace va al final de la primera columna de industrias */}
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Vacío o ajustado */}
          <ul>
            <li><a href="#">Automotor</a></li>
            <li><a href="#">Construcción</a></li>
            <li><a href="#">Fintech</a></li>
            <li><a href="#">Tecnología de marketing</a></li>
            <li><a href="#">Venta al por menor</a></li>
            <li><a href="#">Transporte y logística</a></li>
            {/* Si hubiera más enlaces en esta columna, irían aquí */}
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Vacío o ajustado */}
          <ul>
            <li><a href="#">Aviación</a></li>
            <li><a href="#">Diversión</a></li>
            <li><a href="#">Atención sanitaria</a></li>
            <li><a href="#">Petróleo y gas</a></li>
            <li><a href="#">Cadena de suministro</a></li>
            <li><a href="#">Viajes y hospitalidad</a></li>
            {/* Si hubiera más enlaces en esta columna, irían aquí */}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu3;