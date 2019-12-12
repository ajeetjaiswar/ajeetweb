import React from 'react';
const Headings = (props) => {
    return (
        <div className={props.HeadingClass}>
            <props.tagName>
                {props.head && <span className="not-highlight d-inline-block mr-1">{props.head}</span>}
                {props.highlightHead && <span className="highlight">{props.highlightHead}</span>}
            </props.tagName>
            {props.description && <p className="text-break">{props.description}</p>}
            {props.subDetail && <label className="mt-auto">{props.subDetail}</label>}
            {props.readingTime && <label className="mt-auto">
                <span>
                    {props.date}
                </span>
                <span className="second-span">
                </span>
                <span style={{marginLeft:'10px'}}>
                    {props.timeToRead}
                </span>

            </label>}
        </div>
    );
};

export default Headings;
