import React from 'react';
import './WorkListView.css'
import WorkView from '../WorkView/WorkView';
import { useState } from 'react';

const WorkListView = ({workList, close, techList}) =>{
    const uri = "https://portfolio-back-enzo.herokuapp.com/api/"

    const [values, setValues] = useState({
        selected: false,
        title: "",
        description: "",
        technologies: [],
        url: ""
    })
    
    const handleTechnology = (id,key)=>{
        for (let i = 0; i < techList.length; i++) {
            if (techList[i]._id === id) {
                return(
                    <div key={key} className="work_list-info_container-technologies-box">
                        <img src={`${uri}technologies/photo/${techList[i]._id}`} alt="" />
                        <p>{techList[i].title}</p>
                    </div>
                )
            }
        }
    }

    return(
        <div className="work_list-container">
            <i className="fas fa-times work-list-close" onClick={close}></i>
            {
                values.selected ?
                (
                    <div className="work_list-info_container">
                        <div className="work_list-info_box">
                            <h5>{values.title}</h5>
                            <div className="work_list-info_container-technologies">{
                                values.technologies.map((e,i)=>(
                                    handleTechnology(e,i)
                                ))
                                }
                            </div>
                            <p>{values.description}</p>
                            <a href={values.url}>{values.url}</a>
                        </div>
                    </div>
                )
                :
                (
                    <div className="work_list-info_container">
                        <div className="work_list-info_box">
                            <p>Selecciona uno de mis trabajos!</p>
                        </div>
                    </div>
                )
            }

            <div className="work-list-box">
                {
                    workList.map(e =>(
                        <WorkView
                            id={e._id}
                            key={e._id}
                            setValues={()=> setValues({
                                selected: true,
                                title: e.title,
                                description: e.description,
                                technologies: e.technologies,
                                url: e.url
                            })}
                            
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default WorkListView;