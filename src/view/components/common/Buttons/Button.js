import React from 'react';

const Button = props =>{
    return(
        <button type={props.btnType} onClick={props.btnClickEvent} className={props.btnClass}>
            {props.btnText}
        </button>
    )
} 

export default Button;