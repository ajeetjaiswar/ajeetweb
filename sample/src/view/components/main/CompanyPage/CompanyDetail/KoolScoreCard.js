import React, { useState } from 'react';
import KoolRatingCard from "./KoolRatingCard";
import { QuotesDim } from '../../../../../assets/images';

const KoolScoreCard = (props) => {
    let [visibleCard, changeVisibleCard] = useState();
    let { data } = props;
    let { personas, reviews } = data;
    let ratingData = personas ? personas : [];
    let reviewsData = reviews ? reviews : [];
    return (
        <div>
            <div className="companyscore-wrapper">
                <div className="koolscore-header">
                    <h3>KoolKanya Score</h3>
                </div>
                <div className="company-content-wrapper d-block d-sm-flex align-items-center">
                    <div className="rating-body d-flex align-items-center justify-content-center">
                        <h3>{data.ratings ? (data.ratings).toFixed(1) : 0}</h3>
                    </div>
                    <div className="details-content">
                        <p>Kool Kanya rating is an aggregate score based on anonymous surveys from employees or
                            ex-employees
                            from a company</p>
                    </div>
                </div>

                <div className="score-bottom-content">
                    <div className="row">
                        {ratingData.map(function (item, index) {
                            return (
                                <KoolRatingCard item={item} cardIndex={index}
                                    changeVisibleCard={changeVisibleCard}
                                    visibleCard={visibleCard} />
                            )
                        })}
                    </div>
                </div>
            </div>
            {reviewsData.length > 0 ? <div className="companyscore-wrapper ">
                <div className="koolscore-header">
                    <h3>Reviews</h3>
                    <div className="quotes-dim">
                        <img src={QuotesDim} alt="quotes"/>
                    </div>
                </div>
                <div className="review-content-wrapper">
                    {reviewsData.map(function (item, index) {
                        return (
                            <div className="review-content">
                                <p>{item}</p>
                                <span style={{ color: '#FF671D', marginTop: '6px' }}>May, 2019</span>
                            </div>)
                    })
                    }
                </div>
            </div> : null}

        </div>
    );
};

export default KoolScoreCard;
