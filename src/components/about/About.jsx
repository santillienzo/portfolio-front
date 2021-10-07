import React, { useEffect, useState } from 'react';
import './about.css'
import './Modal.css'

import icons from '../../js/iconosAbout'

import Title from '../microComponentes/Title';
import cv from '../../assets/PDF/SANTILLI_ENZO.pdf';

const AboutCard = (props) =>{
    return(
        <div className="item-card wow animate__animated animate__pulse">
            <div className="item_face item_face1">
                <div className="item_content">
                    <img src={props.image} alt="" />
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="item_face item_face2">
                <div className="item_content">
                    <p>{props.text}</p>
                    <button onClick={props.function}>Leer más</button>
                </div>
            </div>
        </div>
    )
}

const AboutModal = (props) =>{
    
    useEffect(()=>{
        const content = document.getElementById('parrafo');
        content.innerHTML = props.content;

    },[])

    return(
        <div className="aboutModal-container">
            <div className="aboutModal-content">
                <div className="aboutModal-close" onClick={props.close}>
                    <i class="far fa-times-circle" ></i>
                </div>
                <div className="aboutModal-content-title"><h3>{props.title}</h3></div>
                <div className="aboutModal-content-content">
                    <p id="parrafo">.</p>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    const [aboutModalState, setAboutModalState] = useState({
        active: false,
        title: "",
        content: ""
    })
    return (
        <>
        <section className="about-container" id="about">
            <Title title="¿Quién soy?"/>
            <div className="presentation-container">
                <div className="presentation">
                    <h5>Mi nombre es Enzo Santilli y soy Fullstack Developer, pero amante del Frontend.</h5>
                </div>
                <div className="items-container">
                    <AboutCard 
                        image={icons.codigo} 
                        title="Pasión" 
                        text="Mi pasión por el desarrollo empezó allá por el año 2018 cuándo conocí este mundo y me enamoró completamente..." 
                        function={()=> setAboutModalState({
                            active: true,
                            title: "Pasión",
                            content: "Mi pasión por el desarrollo empezó allá por el año 2018 cuándo conocí este mundo y me enamoró completamente.<br><br> Fui investigando sobre esta ciencia progresivamente, pasando por todas sus ramas: desarrollo de videojuegos, apps moviles, desarrollo web, etc. No lograba decidirme hasta que, luego de múltiples frustraciones, decidí aprender desarrollo web, no me arrepiento de nada, es un mundo hermoso en el que disfruto trabajar."
                        })}

                    />
                    <AboutCard 
                        image={icons.libro} 
                        title="Educación" 
                        text="En el año 2020 decidí inscribirme en la Tecnicatura Superior en Programacion de la Universidad Tecnológica Nacional (UTN) para así poder aprender en profundidad las distintas ramas de la programación y todo lo relacionado al software..." 
                        function={()=> setAboutModalState({
                            active: true,
                            title: "Educación",
                            content: "En el año 2020 decidí inscribirme en la Tecnicatura Superior en Programacion de la Universidad Tecnológica Nacional (UTN) para así poder aprender en profundidad las distintas ramas de la programación y todo lo relacionado al software, actualmente estoy cursando el tercer semestre de la Tecnicatura.  <br><br> Aprendo de manera autodidacta sobre desarrollo web en mis tiempos libres para poder ser un mejor profesional y trabajar de lo que me gusta mientras estudio."
                        })}

                    />
                    <AboutCard 
                        image={icons.objetivo} 
                        title="Objetivos" 
                        text="Tengo una serie de objetivos, que si bien son personales, me gustaría compartirlos para que todos vean mis avances:" 
                        function={()=> setAboutModalState({
                            active: true,
                            title: "Objetivos",
                            content: "Tengo una serie de objetivos, que si bien son personales, me gustaría compartirlos para que todos vean mis avances:<br><br> <i class='far fa-check-square'></i> Trabajar de forma Freelancer en el desarrollo web  <br> <i class='far fa-check-square'></i> Ser desarrollador Fullstack  <br> <i class='far fa-square'></i> Ser desarrollador móvil y de Apps de escritorio  <br> <i class='far fa-square'></i> Trabajar en una Software Factory"
                        })}

                    />
                </div>
            </div>
            <div className="pdf-container">
                <a href={cv} download="Santilli Enzo" className="pdf">Descargar CV</a>
            </div>
        </section>
            {
                aboutModalState.active ?
                (
                    <AboutModal 
                        title={aboutModalState.title}
                        content={aboutModalState.content}
                        close={()=>setAboutModalState({
                                active:false, 
                                title: "",
                                content: ""
                            })}
                    />
                )
                :
                ("")
            }
        </>
    );
};

export default About;