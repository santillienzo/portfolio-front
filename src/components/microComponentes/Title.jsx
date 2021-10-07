import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div className="title" id={props.id} style={props.style}>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Title;