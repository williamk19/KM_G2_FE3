import React from "react";

const gif = ({ title, url }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={url} alt='gif' />
        </div>
    );
};

export default gif;