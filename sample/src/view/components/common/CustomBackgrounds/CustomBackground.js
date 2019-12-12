import React from 'react';

const CustomBackground = (props) => {
    return (
        <div className={`backgrounds ${props.className}`}></div>
    );
};

export default CustomBackground;