import React from 'react';
import './works.css'
import './Coffe.css'

import imgWorks from '../../js/worksImg'



const Works = () => {

    // const redirigirWork = (url)=>{
    //     window.open(url,'_blank');
    // }
    
    const objWork = [
        {
            "fondoImagen": imgWorks.fondoSpace,
            "logoImagen": imgWorks.logoSpace,
            "url": "http://spaceapps.com.ar",
            "altLogo": "Logo Space Apps, Tipo de logo Isotipo",
            "altFondo":"Pantalla de inicio Space Apps, diseño minimalista y bello",
            "class":""
        },
        {   
            "fondoImagen": imgWorks.fondoWeather,
            "logoImagen": imgWorks.logoWeather,
            "url": "https://piquant-cork.surge.sh/",
            "altLogo": "trabajo de enzo logo weather",
            "altFondo": "Diseño de aplicación que da el tiempo actual de una ciudad",
            "class":""
        },
        {   
            "fondoImagen": imgWorks.fondoDecibeles,
            "logoImagen": imgWorks.logoDecibeles,
            "url": "https://decibeles-front.surge.sh/",
            "altLogo": "Logo DA. Diseñado por Enzo Santilli",
            "altFondo": "Modelo de tienda virtual diseñada por Enzo Santilli",
            "class":"in-production"
        },
        {   
            "fondoImagen": imgWorks.fondoPomofy,
            "logoImagen": imgWorks.logoPomofy,
            "url": "https://pomofy.surge.sh/",
            "altLogo": "Pomofy, la técnica Pomodoro y Spotify, todo en uno",
            "altFondo": "Tecnica Pomodoro y Spotify, todo en uno.",
            "class":"in-production"
        },
        {
            "fondoImagen": imgWorks.fondoGlow,
            "logoImagen": imgWorks.logoGlow,
            "url": "http://glowstore.com.ar/",
            "altLogo": "Tienda de ropa Glow",
            "altFondo":"Página web de Glow diseñada por Enzo Santilli, tienda online de indumentaria y accesorios.",
            "class":""
        }
    ]


    return (
        <section className="works-container" id="works">
            <div className="work-title">
                <h3>Trabajos</h3>                
            </div>
            <div className="works-images">
                {
                    objWork.map((item,i)=>(
                        <a className={`work ${item.class}`} key={i} href={item.url} target="_BLANK">
                            <img className="fondoImagen" src={item.fondoImagen} alt={item.altFondo}/>
                            <img className="logoImagen" src={item.logoImagen} alt={item.altLogo}/>
                        </a>
                    ))
                }
            </div>
        </section>
    );
};

export default Works;