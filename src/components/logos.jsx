import React, { useRef } from "react";

import "../styles/logos.css";

const companies = [
  {
    name: "Abbott",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Abbott_logo_2018.svg",
    quote: "“Abbott fue muy receptiva y confiable durante todo el proceso.”",
    author: "Líder de proyecto",
  },
  {
    name: "Autodesk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Autodesk_Logo.svg/1280px-Autodesk_Logo.svg.png",
    quote: "“El onboarding fue sencillo y el equipo fue muy atento.”",
    author: "HR Manager",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    quote: "“Una experiencia impecable desde el principio.”",
    author: "Head of Talent",
  },
  {
    name: "BBVA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/BBVA_2019_logo.svg",
    quote: "“Nos ayudaron a encontrar perfiles ideales en poco tiempo.”",
    author: "Responsable de RRHH",
  },
  {
    name: "eBay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    quote: "“El sistema es intuitivo y nos ahorró muchas horas de trabajo.”",
    author: "Gerente de operaciones",
  },
  {
    name: "EY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/EY_logo_2019.svg",
    quote: "“Logramos resultados sorprendentes con el equipo.”",
    author: "Consultor senior",
  },
];

const Empresas = () => {
  return (
    <section className="empresas-section">
      <div className="empresas-grid">
        {companies.map((company, index) => (
          <div key={index} className="empresa-card">
            <img src={company.logo} alt={company.name} className="empresa-logo" />
            <p className="empresa-quote">{company.quote}</p>
            <span className="empresa-author">— {company.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Empresas;
