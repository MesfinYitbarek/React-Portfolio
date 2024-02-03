import React from "react"
import './Navbar.css'
import MobileNav from "./MobileNav/Mobilenav"

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false)

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }

    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
            <img className="logo" src="..\..\assets\logo.png" alt="logo" />
                
              <ul>
                <li>
                    <a className="menu-item">Home </a>
                </li>
                <li>
                    <a className="menu-item">Skills </a>
                </li>
                <li>
                    <a className="menu-item">Work Experience </a>
                </li>
                <li>
                    <a className="menu-item">Contact </a>
                </li>
                <button className="contact-btn">Hire Me</button>
                
              </ul>
              <button class="menu-btn" onClick={toggleMenu}>
                    <span class={"material-Symbols-outlined"}
                    style={{fontSize:"1.8rem"}}>
                        {openMenu? "X" :"O"}
                    </span>
                </button>
            </div>
        </nav>
        
        
        </>
    )
}
export default Navbar