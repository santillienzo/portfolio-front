import React, {useState} from 'react';
import './nav.css'
import './nav_responsive.css'
import Logo from '../../assets/logo.png';

import {
    Link as LinkScroll 
} from 'react-scroll'

const Nav = () => {
    const ventana = window.screen.width;
    const[activate, setActivate] = useState(false)

    const desplegarMenu = ()=>{
        const menu_responsive = document.getElementById('menu-res')

        if (activate === false) {
            menu_responsive.classList.remove('animate__fadeOutRight')
            menu_responsive.classList.add('animate__fadeInRight')
            menu_responsive.style.display = "block";
            setActivate(true)
        }else{
            menu_responsive.classList.remove('animate__fadeInRight')
            menu_responsive.classList.add('animate__fadeOutRight')
            setActivate(false)
        }
    }

    

    if (ventana <= 780) {
        return(
            <nav className="nav-container-res">
                <div className="nav-general-res">
                    <div className="nav-icon-res" onClick={desplegarMenu}>
                        <i class="fas fa-bars"></i>
                    </div>
                    <div className="nav-content-res animate__animated" id="menu-res">
                        <div className="close-icon">
                            <i class="fas fa-times" onClick={desplegarMenu}></i>
                        </div>
                        <ul className="nav-elementos-res">
                            <li><LinkScroll onClick={desplegarMenu} to="home" smooth duration={500} className="link-scroll-res">Inicio</LinkScroll></li>
                            <li><LinkScroll onClick={desplegarMenu} to="about" smooth duration={500} className="link-scroll-res">¿Quién soy?</LinkScroll></li>
                            <li><LinkScroll onClick={desplegarMenu} to="works" smooth duration={500} className="link-scroll-res">Trabajos</LinkScroll></li>
                            <li><LinkScroll onClick={desplegarMenu} to="service" smooth duration={500} className="link-scroll-res">Servicios</LinkScroll></li>
                            <li><LinkScroll onClick={desplegarMenu} to="contact" smooth duration={500} className="link-scroll-res">Contacto</LinkScroll></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }else{
        return (
            <nav className="nav-container">
                <ul className="nav-elementos non-selectable">
                    <li><LinkScroll LinkScroll to="about" smooth duration={500} className="link-scroll">¿Quién soy?</LinkScroll></li>
                    <li><LinkScroll to="works" smooth duration={500} className="link-scroll">Trabajos</LinkScroll></li>
                    <li className="elmt-img"><LinkScroll to="home" smooth duration={500}><img src={Logo} alt=""/></LinkScroll></li>
                    <li><LinkScroll to="service" smooth duration={500} className="link-scroll">Servicios</LinkScroll></li>
                    <li><LinkScroll to="contact" smooth duration={500} className="link-scroll">Contacto</LinkScroll></li>
                </ul>
            </nav>
        );
    }





    
};

export default Nav;