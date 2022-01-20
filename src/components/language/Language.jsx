import React from 'react';
import './language.css';

import logos from '../../js/logos_ln'

const Tecnology =(props)=>{
    
    return(
        <div className="tec-container">
            <img src={props.icono} className={"wow animate__animated " + props.clase} alt=""/>
            <div className="tec-text">
                <h4>{props.nombre}</h4>
            </div>
        </div>
    );
};

const SectionTecnology = (props) =>{
    return(
        <div className="sectionTec-container">
            <h3>{props.titulo}<span>{props.subtitle}</span></h3>
            {
                props.tecnology.map((item,i)=>(
                    <Tecnology
                        icono={item.imagen}
                        nombre={item.nombre}
                        key={i}
                        clase={item.clase}
                    />
                ))
            }
        </div>
    );
};


const Language = () => {
    return (
        <section className="language-container" id="language">
            <div className="sectec-container">
                <SectionTecnology 
                    titulo="Lenguajes"
                    subtitle="Programación, marcado, etc"
                    tecnology={
                        [
                            {
                                "imagen": logos.html,
                                "nombre": "Html",
                                "clase": ""
                            },
                            {
                                "imagen": logos.css,
                                "nombre": "Css",
                                "clase": ""
                            },
                            {
                                "imagen": logos.js,
                                "nombre": "JavaScript",
                                "clase": ""
                            },
                            {
                                "imagen": logos.java,
                                "nombre": "Java",
                                "clase": ""
                            },
                            {
                                "imagen": logos.php,
                                "nombre": "Php",
                                "clase": ""
                            },
                            {
                                "imagen": logos.sql,
                                "nombre": "Sql",
                                "clase": ""
                            },
                        ]
                    }
                    
                />
                <SectionTecnology 
                    titulo="Front"
                    subtitle="Frameworks y herramientas"
                    tecnology={
                    [
                        {
                            "imagen": logos.react,
                            "nombre": "React",
                            "clase": ""
                        },
                        {
                            "imagen": logos.bootstrap,
                            "nombre": "Bootstrap",
                            "clase": ""
                        },
                        {
                            "imagen": logos.next,
                            "nombre": "Next.js",
                            "clase": ""
                        },
                    ]
                    }
                    
                />
                <SectionTecnology 
                    titulo="Back"
                    subtitle="Frameworks y herramientas"
                    tecnology={
                    [
                        {
                            "imagen": logos.mongo,
                            "nombre": "MongoDB",
                            "clase": ""
                        },
                        {
                            "imagen": logos.node,
                            "nombre": "NodeJS",
                            "clase": ""
                        },
                    ]
                    }
                    
                />
            </div>
        </section>
    );
};

export default Language;