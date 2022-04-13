import React from "react";
import './gif.component.css';
const gif = ({ title, url }) => {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={url} alt='gif' />
        </div>
    );
};

export default gif;