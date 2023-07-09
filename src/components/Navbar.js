import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa" 
import { FaTimes } from "react-icons/fa" 
import React, {useState} from "react"

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <Link to="/">
                <h1>Portifolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
            <div className="toggle" onClick={handleClick}>
                {click ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    );
};

export default Navbar;