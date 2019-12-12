import React from 'react';

const PageHeading = (props) => {
    return (
        <div className={props.className}>
            <props.tagName className={props.headingClass}>
                {props.headingText}
            </props.tagName>
        </div>
    );
};

export default PageHeading;