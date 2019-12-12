import React from 'react';

const InputBox = props => {
    return (
        <input type={props.inputType} name={props.inputName} placeholder={props.inputPlaceholder} className={props.inputClass}/>
    );
}

export default InputBox;