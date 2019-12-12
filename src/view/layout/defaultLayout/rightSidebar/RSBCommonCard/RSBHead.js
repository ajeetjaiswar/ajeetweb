import React from 'react';
import {Link} from 'react-router-dom';

const RSBHead = (props) => {
    return (
        <div className='heading-wrap d-flex justify-content-between align-items-center'>
            <h2>{props.headingText}</h2>
            <Link to='/' className="expand">See All</Link>
        </div>
    );
};

export default RSBHead;
