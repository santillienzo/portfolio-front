import React, { useEffect, useState } from 'react';
import './works.css'
import Title from '../microComponentes/Title';
import { getWorks } from '../../js/Services/worksService';



const Works = () => {
    const [workList, setWorkList] = useState([])
    const [filterWorkList, setFilterWorkList] = useState(workList)

    const loadWorks = ()=>{
        getWorks().then(data=>{
            setWorkList(data)
            setFilterWorkList(data)
        })
    }

    const filterWorks = (e, category)=>{
        const filterContainer = document.getElementById('filter-container').childNodes

        if (category === false) {
            setFilterWorkList(workList)
        }else{
            // setFilterWorkList()
            setFilterWorkList(workList.filter(
                (work)=>{
                    for (let i = 0; i < work.category.length; i++) {
                        if (work.category[i] == category) {
                            return true
                        }
                    }
                    return false
                }
            ))
        }

        for (let i = 0; i < filterContainer.length; i++) {
            filterContainer[i].classList.remove('filter_active')
        }
        e.target.parentNode.classList.add('filter_active')

    }
    

    useEffect(()=>{
        if (workList.length === 0) {
            loadWorks()
        }

    }, [workList.length])

    return (
        <section className="works-container" id="works">
            <Title title="Trabajos"/>
            <div className="filterWorks-container" id='filter-container'>
                <div onClick={(e)=> filterWorks(e, false)} className='filter_active'><p>Mostrar todos</p></div>
                <div onClick={(e)=> filterWorks(e, 1)}><p>Aplicaciones web</p></div>
                <div onClick={(e)=> filterWorks(e, 2)}><p>eCommerce</p></div>
                <div onClick={(e)=> filterWorks(e, 3)}><p>Portafolios</p></div>
                <div onClick={(e)=> filterWorks(e, 4)}><p>Landing pages</p></div>
                <div onClick={(e)=> filterWorks(e, 5)}><p>Css art</p></div>
            </div>
            <div className='workList-container'>
                {
                    filterWorkList.map((e,i)=>(
                        <div key={i} className='work-cover'>
                            <div className='work-background'>
                                <img src={`https://portfolio-back-enzo.herokuapp.com/api/works/works/background/${e._id}`} alt="" />
                            </div>
                            <div className='work-logo'>
                                <img src={`https://portfolio-back-enzo.herokuapp.com/api/works/works/logo/${e._id}`} alt="" />
                            </div>
                            <div className='work-description'>
                                <div className="work-description-tech">
                                    {
                                        e.technologies.map((e,i)=>(
                                            <div key={i} className='work-description-tech_img'>
                                                <img src={`https://portfolio-back-enzo.herokuapp.com/api/technologies/photo/${e}`} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <a href={e.url} target={'_blank'} rel="noreferrer">
                                    Visitar web
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Works;