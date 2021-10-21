import React, { useState} from 'react';
import './contact.css'

import Title from '../microComponentes/Title';
import { sendEmail } from '../../js/Services/core';

const Contact = () => {

    //Expresiones regularess
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        asunto: /^[a-zA-ZÀ-ÿ!-¿\s]{1,90}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const campos ={
        nombre: true,
        email:true,
        asunto:true,
        mensaje:true
    }

    const [email,setEmail] = useState({
        name: "",
        email: "",
        subject:"",
        message:""
    })

    const validarFormulario= (e)=>{
        switch (e.target.name){
            case "name":
                validarCampo(expresiones.nombre, e.target, 'nombre')
            break
            case "email":
                validarCampo(expresiones.correo, e.target, 'email')
            break
            case "subject":
                validarCampo(expresiones.asunto, e.target, 'asunto')
            break 
            case "message":
                if (e.target.value.trim()) {
                    campos.mensaje = true
                    document.getElementById("mensaje").classList.remove("errorInput")
                }else{
                    document.getElementById("mensaje").classList.add("errorInput")
                }
            break 
            default: 
            break;
        }
    }

    const handleChange = (name, e) =>{
        setEmail({...email, [name]: e.target.value})
    }

    const validarCampo= (expresion, input, campo)=>{
        if (expresion.test(input.value.trim())) {
            document.getElementById(`${campo}`).classList.remove("errorInput")
            campos[campo] = true
        }else{
            document.getElementById(`${campo}`).classList.add("errorInput")
            campos[campo] = false
        }
    }

    //Función para enviar email
    const submitEmail = (e)=>{
        e.preventDefault()

        if (campos.nombre && campos.email && campos.asunto && campos.mensaje) {
            sendEmail(email)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
            document.getElementById("mensaje_incorrecto").style.display ="none"
            document.getElementById("mensaje_correcto").style.display ="block"
        }else{
            document.getElementById("mensaje_correcto").style.display ="none"
            document.getElementById("mensaje_incorrecto").style.display ="block"
        }
        e.target.reset();

    }


    return (
        <section className="contact-container" id="contact">
            <Title id="contact" title="Contacto"/>

            <div className="contents-container">
                <div className="social-container">
                    <div className="icons">
                        <div className="icon wow animate__animated animate__flipInY">
                            <a href="https://wa.me/5492634786580" className="i-contain" target="_BLANK" rel="noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <div className="text-icon">
                                <span>Whatsapp</span>
                                <p>+54 263 4786580</p>
                            </div>
                        </div>
                        <div className="icon wow animate__animated animate__flipInY">
                            <a href="https://github.com/santillienzo?tab=repositories" className="i-contain" target="_BLANK" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <div className="text-icon">
                                <span>GitHub</span>
                                <p>santillienzo</p>
                            </div>
                        </div>
                        <div className="icon wow animate__animated animate__flipInY">
                            <a href="https://www.linkedin.com/in/enzo-santilli-bb06a01a9/" className="i-contain" target="_BLANK" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <div className="text-icon">
                                <span>Linkedin</span>
                                <p>Enzo Santilli</p>
                            </div>
                        </div>
                        <div className="icon wow animate__animated animate__flipInY">
                            <a href="mailto:enzo.santilli16@gmail.com.ar" className="i-contain" >
                                <i className="far fa-envelope"></i>
                            </a>
                            <div className="text-icon">
                                <span>E-mail</span>
                                <p>enzo.santilli16@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                {/*  */}
                    <form onSubmit={submitEmail} >
                        <h3>Enviar Mensaje</h3>
                        <div className="inputBox">
                            <input type="text" name="name"  id="nombre" required 
                                onChange={(e)=>{
                                        validarFormulario(e);
                                        handleChange('name',e)
                                    }}/>
                            <span>Nombre completo</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email" id="email" required 
                                onChange={(e)=>{
                                        validarFormulario(e);
                                        handleChange('email',e)
                                    }}/>
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="subject" id="asunto" required 
                                onChange={(e)=>{
                                        validarFormulario(e);
                                        handleChange('subject',e)
                                    }}/>
                            <span>Asunto</span>
                        </div>
                        <div className="inputBox">
                            <textarea name="message" id="mensaje" required 
                                onChange={(e)=>{
                                    validarFormulario(e);
                                    handleChange('message',e)
                                }}></textarea>
                            <span>Mensaje</span>
                        </div>
                        <div className="btn-container">
                            <button>Enviar</button>
                        </div>
                        <p id="mensaje_correcto" className="mensaje_enviado">Mensaje enviado correctamente.</p>
                        <p id="mensaje_incorrecto" className="mensaje_enviado">Por favor revise todos los campos.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;



