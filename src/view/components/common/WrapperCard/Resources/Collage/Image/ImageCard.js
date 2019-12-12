import React from 'react';
import { ProfileImage } from '../../../../../../../assets/images';

const ImageCard = (props) => {
    return (
        <img src={props.url} alt={ProfileImage} />
    );
};

export default ImageCard;
