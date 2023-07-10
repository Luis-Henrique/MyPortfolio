import "./NavbarStyles.css"
import { FaBars } from "react-icons/fa" 
import { FaTimes } from "react-icons/fa" 
import React, {useState} from "react"

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
                    <a href="#home"><div className="nav-item">Home</div></a>
                </li>
                <li>
                    <a className="nav-item" href="#contact"><div className="nav-item">Contact</div></a>
                </li>
                <li>
                    <a className="nav-item" href="#projects"><div className="nav-item">Projects</div></a>
                </li>
            </ul>
            <div className="toggle" onClick={handleClick}>
                {click ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
            </div>
        </div>
    );
};

export default Navbar;