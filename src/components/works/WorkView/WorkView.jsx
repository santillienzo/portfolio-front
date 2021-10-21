import React from 'react';
import './WorkView.css'
import imgWorks from '../../../js/worksImg'


const WorkView = ({id, setValues}) =>{
    const uri = "https://portfolio-back-enzo.herokuapp.com"
    return(
        <div className="work_view-container">
            <div className="work_view-img-container" onClick={setValues}>
                <div className="work_view-img-container-background"><img src={`${uri}/api/works/works/background/${id}`} alt="" /></div>
                <div className="work_view-img-container-logo"><img src={`${uri}/api/works/works/logo/${id}`} alt="" /></div>
            </div>
        </div>
    )
}

export default WorkView;