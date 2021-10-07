import React, {useEffect, useState} from 'react';
import './header.css'
import './header_responsive.css'



const Header = () => {

    const [activate, setActivate] = useState(false);
    const [ventana,setVentana] = useState(window.screen.width);
    

    
    if (ventana <= 780) {
        return(
            <div className="header-container-res" id="home">
                <div className="wave">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header-text-res">
                    <div className="name-text-res animate__animated animate__backInLeft non-selectable">
                        <p id="hello-res">Hola, soy</p>
                        <div className="nombre-texto-res">
                            <h1 className="h1-name-res">ENZO SANTILLI</h1>
                        </div>
                    </div>
                </div>
                <div className="about-info-res">
                    <div className="text-info-res animate__animated animate__backInLeft">
                        <h3>Front-end developer</h3>
                        <p>Argentina/ Mendoza/ San Martín</p>
                        <p>16/04/2002</p>
                        <p>Idiomas</p>
                        <div className="idioma-res">
                            <p>Español</p>
                            <p>Inglés (básico)</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        //Funciones
        const activarAbout = ()=>{
            const texto_nombre = document.querySelector(".name-text");
            const about_info = document.querySelector(".text-info");
            
            if (activate == false) {
                setActivate(true);
                about_info.classList.remove("animate__bounceOutRight")
                texto_nombre.style.marginLeft = "5%";
                about_info.style.display = "block"
                about_info.classList.add("animate__bounceInRight")
            }else{
                setActivate(false);
                texto_nombre.style.marginLeft = "30%";
                about_info.classList.remove("animate__bounceInRight")
                about_info.classList.add("animate__bounceOutRight")
                setTimeout(()=>{
                    about_info.style.display = "none"
                },1000)
            }
        }
    
        return (
            <header className="header-container" id="home">
                <div className="wave">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="header-text">
                    <div className="name-text animate__animated animate__backInLeft non-selectable">
                        <p id="hello">Hola, soy</p>
                        <div className="nombre-texto">
                            <h1 className="h1-name">ENZO SANTILLI</h1>
                        </div>
                        {
                            activate ?
                            (<p id="about"><span className="about-desact" onClick={activarAbout}></span>Cerrar</p>)
                            :
                            (<p id="about"><span className="about-act" onClick={activarAbout}></span>Sobre mí</p>)
                        }
                        
                    </div>
                    <div className="about-info">
                        <div className="text-info animate__animated">
                            <h3>Front-end developer</h3>
                            <p>Argentina/ Mendoza/ San Martín</p>
                            <p>16/04/2002</p>
                            Estudios
                            <div className="idioma">
                                <p>Universidad Tecnológica Nacional</p>
                                <p>Tecnicatura en programación</p>
                            </div>
                            <p>Idiomas</p>
                            <div className="idioma">
                                <p>Español</p>
                                <p>Inglés (básico)</p>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        );
    }
};

export default Header;