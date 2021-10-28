import React from 'react';

const Background = ({id}) => {
    const uri = "https://portfolio-back-enzo.herokuapp.com/api/";

    return (
        <img src={`${uri}works/works/background/${id}`} alt="" />
    );
};

export default Background;