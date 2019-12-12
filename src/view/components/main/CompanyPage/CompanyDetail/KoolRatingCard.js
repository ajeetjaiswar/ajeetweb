import React from 'react';
import {
    CultureIcon,
    ReservationIcon,
    LearningApportunity,
    Maternity,
    Safety,
    Wallet,
    WorkBalance,
    WorkSatisfaction
} from '../../../../../assets/images';

export function getRatingIcon(props) {
    switch (props) {
        case 'Culture':
            return CultureIcon;
        case 'Safety':
            return Safety;
        case 'Learning Opportunity':
            return LearningApportunity;
        case 'Maternity Benefits':
            return Maternity;
        case 'Female Representation':
            return ReservationIcon;
        case 'Job Satisfaction':
            return WorkSatisfaction;
        case 'Work Life Balance':
            return WorkBalance;
        case 'Salary Benefits':
            return Wallet;
        default:
            return 'foo';
    }
}


const KoolRatingCard = (props) => {
    let { name, rating, description } = props.item;
    let { cardIndex, changeVisibleCard, visibleCard } = props;
    const progressPercent = `${(100 / 5) * rating}%`;
    return (
        <div className="col-sm-6 btn" onClick={() => changeVisibleCard(cardIndex)}>

            <div className={"koolrating-wrapper d-flex flex-column justify-content-center"}>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={getRatingIcon(name)} className="rating-icon" alt="rating-icon"/>
                    <div className="rating-section-body">
                        <h3>{name}</h3>
                        <div className="mt-2 d-flex align-items-center">
                            <h4>{(rating).toFixed(1)}</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: progressPercent }}
                                    aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    </div>
                </div>
                {visibleCard == cardIndex && <div className="rating-info">
                    <p>{description}</p>
                </div>}

            </div>
        </div>
    );
};

export default KoolRatingCard;
