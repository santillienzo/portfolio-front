// const API = process.env.REACT_APP_API_URL;
const axios = require("axios")

const uri= `https://portfolio-back-enzo.herokuapp.com`;
// const uri= `http://localhost:5000`;
const config = {
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

export const sendEmail = async email => {
    return await axios.post(`${uri}/email/send-email`, email, config)
    .then(res => {
        return res.json();
    }).catch(err => {
        console.log(err)
    })
}