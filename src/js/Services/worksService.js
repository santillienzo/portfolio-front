const axios = require("axios")

const uri= `https://portfolio-back-enzo.herokuapp.com`;
// const uri= `http://localhost:5000`;

export const getWorks = async()=>{
    return await fetch(
        `${uri}/api/works/works`,
        {
            method: "GET"
        }
    )
    .then(res =>{
        return res.json()
    })
    .catch(err =>{
        console.log(err)
    })
}