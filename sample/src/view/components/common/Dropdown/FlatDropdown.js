import React from 'react';
import {DropdownMenu} from 'reactstrap';

const FlatDropdown = (props) => {
    return (
        <DropdownMenu className={props.FlatDropdownWrapClass}>
            <ul className={`list-unstyled ${props.listWrapClass}`}>
                <li className={props.itemClass}>Edit Post</li>
                <li className={props.itemClass}>Delete Post</li>
                <li className={props.itemClass}>Hide this Post</li>
                <li className={props.itemClass}>Share via</li>
            </ul>
        </DropdownMenu>
    );
};

export default FlatDropdown;