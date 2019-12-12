import React from 'react';

const Aminities = (props) => {
    return (
        <ul className="list-unstyled d-flex align-items-center">
            <li className="d-flex align-items-center">
                <i className={props.likes}></i>
                <span>1</span>
            </li>
            <li className="d-flex align-items-center">
                <i className={props.comments}></i>
                <span>5</span>
            </li>
            <li className="d-flex align-items-center">
                <i className={props.share}></i>
                <span>5</span>
            </li>
            <li className="d-flex align-items-center ml-auto mr-0">
                <i className={props.bookmark}></i>
            </li>
        </ul>
    );
};

export default Aminities;