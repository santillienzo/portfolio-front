import React, {Suspense, lazy, useState } from 'react';
import './WorkListView.css'
import Loading from '../../microComponentes/Loading/Loading';

const Logo = lazy(()=>import('./ImgWork/Logo'))
const Background = lazy(()=>import('./ImgWork/Background'))



const WorkListView = ({workList, close, techList}) =>{
    const uri = "https://portfolio-back-enzo.herokuapp.com/api/"

    const [values, setValues] = useState({
        selected: false,
        id: "",
        title: "",
        description: "",
        technologies: [],
        url: ""
    })
    
    const handleTechnology = (id,key)=>{
        for (let i = 0; i < techList.length; i++) {
            if (techList[i]._id === id) {
                return(
                    <div key={key} className="work_list-technology">
                        <img src={`${uri}technologies/photo/${techList[i]._id}`} alt="" />
                        <p>{techList[i].title}</p>
                    </div>
                )
            }
        }
    }

    return(
        <div className="work_list-container">
            <div className="work_list-box">
                <ul className="work_list-thumb">
                {
                    workList.map((e,i)=>(
                        <li 
                            key={i}
                            onClick={()=>setValues({
                                selected: true,
                                id: e._id,
                                title: e.title,
                                description: e.description,
                                technologies: e.technologies,
                                url: e.url
                            })}
                        >
                        <Suspense fallback={<Loading/>}>
                            <Logo id={e._id}/>
                        </Suspense>
                        </li>
                    ))
                }
                </ul>
                <div className="work_list-info_box">
                    <i className="fas fa-times work_list-info_close" onClick={close}></i>
                    {
                        values.selected ?
                        (
                            <div>
                                <h5>{values.title}</h5>
                                <p className="work_list-technology-description">{values.description}</p>
                                <div>
                                    <i className="fas fa-link"></i>
                                    <a href={values.url} target="_BLANK" rel="noreferrer">{values.url}</a>
                                </div>
                                <div className="work_list-technology-container">
                                    {
                                        values.technologies.map((e,i)=>(
                                            handleTechnology(e,i)
                                        ))
                                    }
                                </div>
                                <div className="work-list-img-work">
                                <Suspense fallback={<Loading/>}>
                                    <Background id={values.id}/>
                                </Suspense>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="work-non_selected">
                                <h5>Selecciona un <span>trabajo</span></h5>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default WorkListView;