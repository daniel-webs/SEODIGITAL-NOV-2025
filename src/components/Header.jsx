 import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import MegaMenu3 from "./MegaMenu3";
import "../styles/Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [pinnedMenu, setPinnedMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-item") && !e.target.closest(".mega-menu")) {
        setPinnedMenu(null);
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const menusWithMegaMenu = ["Solutions", "Technology", "Industries"];
  const directLinks = ["Our Work", "Blog"];

  const handleMouseEnter = (menu) => {
    if (!pinnedMenu) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (!pinnedMenu) setActiveMenu(null);
  };

  const handleClick = (menu) => {
    if (!menusWithMegaMenu.includes(menu)) {
      setActiveMenu(null);
      setPinnedMenu(null);
      return;
    }

    if (pinnedMenu === menu) {
      setPinnedMenu(null);
      setActiveMenu(null);
    } else {
      setPinnedMenu(menu);
      setActiveMenu(menu);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo con link a inicio */}
        <Link to="/" onClick={() => { setActiveMenu(null); setPinnedMenu(null); }}>
          <img src={logo} alt="BairesDev Logo" className="logo" />
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            {menusWithMegaMenu.map((menu) => (
              <li
                key={menu}
                className={`nav-item ${
                  (activeMenu === menu || pinnedMenu === menu) ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(menu)}
              >
                <a href="#" className="nav-link">{menu}</a>

                {(activeMenu === menu || pinnedMenu === menu) && (
                  <>
                    {menu === "Industries" ? (
                      <MegaMenu3 />
                    ) : menu === "Technology" ? (
                      <MegaMenu2 />
                    ) : (
                      <MegaMenu />
                    )}
                  </>
                )}
              </li>
            ))}

            {/* Enlace About */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => { setActiveMenu(null); setPinnedMenu(null); }}>About</Link>
            </li>

            {/* Enlaces directos */}
            {directLinks.map((linkName) => (
              <li key={linkName} className="nav-item">
                <Link
                  to={`/${linkName.toLowerCase().replace(' ', '-')}`}
                  className="nav-link"
                  onClick={() => { setActiveMenu(null); setPinnedMenu(null); }}
                >
                  {linkName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="call-button">Programe una llamada</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
