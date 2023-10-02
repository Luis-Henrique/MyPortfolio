import "./NavbarStyles.css"
import { FaBars } from "react-icons/fa" 
import { FaTimes } from "react-icons/fa" 
import React, {useState} from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <a className="profile" href="#home">
                <div className="profile-pic"/>
                <h1 className="profile-text">LUIS HENRIQUE</h1>
            </a>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <AnchorLink href='#about-anchor' className="nav-item"><div className="nav-item">Sobre</div></AnchorLink>
                </li>
                <li>
                    <AnchorLink href='#courses' className="nav-item"><div className="nav-item">Cursos</div></AnchorLink>
                </li>
                <li>
                    <AnchorLink href='#contact' className="nav-item"><div className="nav-item">Contato</div></AnchorLink>
                </li>
                <li>
                    <a className="nav-item" href="#projects"><div className="nav-item">Projetos</div></a>
                </li>
            </ul>
            <div className="toggle" onClick={handleClick}>
                {click ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    );
};

export default Navbar;