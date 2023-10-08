import "./css/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const location = useLocation();

  return (
    <div className="header">
      <Link className="nav-profile" to="/">
        <div className="profile-pic" />
        <h1 className="profile-text">LUIS HENRIQUE</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {location.pathname !== "/" ? (
              <a href="/" className="nav-item">
                <div className="nav-item">Sobre</div>
              </a>
          ) : (
              <AnchorLink href='#about-anchor' className="nav-item"><div className="nav-item">Sobre</div></AnchorLink>
          )}
        </li>
        <li>
          {location.pathname !== "/" ? (
              <a href="/" className="nav-item">
                <div className="nav-item">
                    Habilidades
                </div>
              </a>
          ) : (
              <AnchorLink href='#skills-anchor' className="nav-item"><div className="nav-item">Habilidades</div></AnchorLink>
          )}
        </li>
        <li>
          {location.pathname !== "/" ? (
              <a href="/" className="nav-item">
                <div className="nav-item">
                    Experiência
                </div>
              </a>
          ) : (
              <AnchorLink href='#exp-anchor' className="nav-item"><div className="nav-item">Experiência</div></AnchorLink>
          )}
        </li>
        <li>
            <a className="nav-item" href="/projects"><div className="nav-item">Projetos</div></a>
        </li>
      </ul>
      <div className="toggle" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
