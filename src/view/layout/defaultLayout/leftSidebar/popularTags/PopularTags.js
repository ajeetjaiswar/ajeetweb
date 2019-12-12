import React from 'react';
import Tags from './Tags';

const PopularTags = (props) => {
    return (
        <div className='card-wrapper'>
            <div className='heading-wrap'>
                <h2>{props.headingText}</h2>
            </div>
            <div className='card-body-wrap'>
                <ul className="list-unstyled d-flex d-sm-block">
                    <Tags
                        tagLink={props.tagLink}
                        tagText={props.tagText}
                        itemClass='expand'
                    />
                </ul>
            </div>
        </div>
    );
};

export default PopularTags;