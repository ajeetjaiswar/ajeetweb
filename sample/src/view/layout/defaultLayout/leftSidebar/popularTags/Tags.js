import React from 'react';
import { Link } from 'react-router-dom';

const Tags = props => {
    return (
        <>
            <li>
                <Link className={props.itemClass} to={props.tagLink}>{props.tagText}</Link>
            </li>
            <li>
                <Link className={props.itemClass} to={props.tagLink}>{props.tagText}</Link>
            </li>
            <li>
                <Link className={props.itemClass} to={props.tagLink}>{props.tagText}</Link>
            </li>
            <li>
                <Link className={props.itemClass} to={props.tagLink}>{props.tagText}</Link>
            </li>
            <li>
                <Link className={props.itemClass} to={props.tagLink}>{props.tagText}</Link>
            </li>
           
        </>
    );
};



export default Tags;