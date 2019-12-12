import React from 'react';

const Badge = (props) => {
    return (
        <div className={props.bageClass}>
            <span>{props.badgeText}</span>
        </div>
    );
};

export default Badge;