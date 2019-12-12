import React from 'react';
import { LogoImage } from '../../../../../assets/images';
// import {Logo}


const Logo = (props) => {
    return (
        <div className={props.classLogo}>
            <img src={LogoImage} alt="kool kanya" />
        </div>
    );
};

export default Logo;