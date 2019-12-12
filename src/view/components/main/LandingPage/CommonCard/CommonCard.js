import React from 'react';
import Headings from '../../../common/Headings/Headings/Headings';
import articleDefault from '../../../../../assets/images/article/articleDefault.jpeg'

const CommonCard = (props) => {
    return (
        <a href={props.hrefTo} target="_blank">
            <div className="landing-card">
                <div className="image-wrapper">
                    {/* {console.log('URL--',props.imgSrc)} */}
                    <img src={props.imgSrc?props.imgSrc:articleDefault} alt={props.heading}/>
                </div>
                <Headings
                    HeadingClass="landing-card-header"
                    tagName="h3"
                    head={props.heading ? props.heading.toUpperCase() : ''}
                    // highlightHead="with Game changers"
                    description={props.description}
                    subDetail={props.subDetail}
                />
            </div>
        </a>
    );
};

export default CommonCard;
