import React from 'react';
import './service.css'

import icons from '../../js/iconosAbout'
import langs from '../../js/logos_ln'

import Title from '../microComponentes/Title';


const ServiceCard =(props)=>{
    return(
        <div className="service-card wow animate__animated animate__flipInY">
            <div className="service_icon"><img src={icons.pc} alt=""/></div>
            <h5>{props.title}</h5>
            <div className="service_items">
                {
                    props.items.map((elemnt,i)=>(
                            <p key={i}>{elemnt}</p>
                        )
                    )
                }
            </div>
            <div className="service_tec">
                {
                    props.servTec.map((elemnt,i)=>(
                            <div key={i}>
                                <img src={elemnt.logo} alt=""/>
                                <p>{elemnt.name}</p>
                            </div>
                        )
                    )
                }
                
                
            </div>
        </div>
    )
}


const Service = () => {
    return (
        <section className="service-container" id="service">
            <Title id="service" title="Servicios"/>

            <div className="services-box">
                <ServiceCard
                    title="Web"
                    items={[
                        "Diseño web multiplataforma.",
                        "Hosting.",
                        "Dominio gratis.",
                        "Mantenimiento mensual."
                    ]}
                    servTec={[
                        {
                            "logo": langs.react,
                            "name": "React"
                        }
                    ]
                    }
                />
            </div>
        </section>
    );
};

export default Service;