import React from 'react';

const GameChanger = (props) => {
    return (
        <div className="landing-card" key={props.key} onClick={() => props.toggleModal(true, props)}>
            <div className="image-wrapper">
                <img src={props.imageSrc} alt={props.name} />
            </div>
            <div className="landing-card-header">
                <h2>
                    <span>
                        {props.name}
                    </span>
                </h2>
                <p className="text-detail text-break">{props.designation}</p>
                <p className="game-changer-profile-link expand">VIEW PROFILE</p>
            </div>
        </div>
    );
};

export default GameChanger;
