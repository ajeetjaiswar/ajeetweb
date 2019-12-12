import React from 'react';
import {Link} from 'react-router-dom';

const Tags = () => {
    return (
        <>
            <li>
                <Link to="/" className="expand">#Marketing</Link>
            </li>
            <li>
                <Link to="/" className="expand">#SocialMedia</Link>
            </li>
            <li>
                <Link to="/" className="expand">#webdesigning</Link>
            </li>
        </>

    );
};

export default Tags;