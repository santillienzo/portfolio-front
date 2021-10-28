import React from 'react';

const Logo = ({id}) => {
    const uri = "https://portfolio-back-enzo.herokuapp.com/api/";

    return (
        <img src={`${uri}works/works/logo/${id}`} alt="" />
    );
};

export default Logo;