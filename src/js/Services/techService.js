const uri= `https://portfolio-back-enzo.herokuapp.com`;
// const uri= `http://localhost:5000`;

export const getTechnologies = async()=>{
    return await fetch(
        `${uri}/api/technologies/technologies`,
        {
            method: "GET"
        }
    )
    .then(res=>{
        return res.json()
    })
    .catch(err =>{
        console.log(err)
    })
}