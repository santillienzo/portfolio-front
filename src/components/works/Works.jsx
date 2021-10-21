import React, { useEffect, useState } from 'react';
import './works.css'

import art from '../../assets/Works/Category/art.png' 
import e_commerce from '../../assets/Works/Category/e-commerce.png' 
import landing from '../../assets/Works/Category/landing-page.png' 
import portfolio from '../../assets/Works/Category/portafolio.png' 
import app from '../../assets/Works/Category/apps.png' 

import Title from '../microComponentes/Title';
import WorkListView from './WorkListView/WorkListView';
import { getWorks } from '../../js/Services/worksService';
import { getTechnologies } from '../../js/Services/techService';



const WorkCategory = ({id, title, img, call})=>{
    return (
        <div className="work_category-container" onClick={()=> call(id)}>
            <div className="work_category-box">
                <div className="work_category-img">
                    <img src={img} alt="" />
                </div>
                <p>{title}</p>
            </div>
        </div>
    )
}

const Works = () => {    
    const [workActivate, setWorkActivate] = useState(false);
    const [workList, setWorkList] = useState([])
    const [workListByCategory, setWorkListByCategory] = useState([])
    const [techList, setTechList] = useState([])

    const workCategories = [
        {
            id: 1,
            title: "Aplicaciones",
            img: app,
        },
        {
            id: 2,
            title: "E-commerce",
            img: e_commerce,
        },
        {
            id: 3,
            title: "Portafolios",
            img: portfolio,
        },
        {
            id: 4,
            title: "Landing pages",
            img: landing,
        },
        {
            id: 5,
            title: "Css Art",
            img: art,
            call: ""
        },
        
    ]

    
    const handleWorkList = (categoryId)=>{
        setWorkListByCategory(workList.filter(work => work.category === categoryId))
        setWorkActivate(true)
    }

    const loadWorks = ()=>{
        getWorks().then(data=>{
            setWorkList(data)
        })
    }

    const loadTechnologies = ()=>{
        getTechnologies().then(data=>{
            setTechList(data)
        })
    }

    useEffect(()=>{
        loadWorks()
        loadTechnologies()
    }, [])

    return (
        <section className="works-container" id="works">
            <Title title="Trabajos"/>
            <div className="category-container">
                {
                    workCategories.map((e)=>(
                        <WorkCategory 
                            key={e.id}
                            id={e.id}
                            title={e.title} 
                            img={e.img}
                            call={handleWorkList}
                        />
                    ))
                }
            </div>
            {
                workActivate ?
                (
                    <WorkListView techList={techList} workList={workListByCategory} close={()=> setWorkActivate(false)}/>
                ):("")
            }
        </section>
    );
};

export default Works;