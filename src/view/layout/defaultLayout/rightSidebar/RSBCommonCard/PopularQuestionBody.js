import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../../../../components/common';
import RouterConstants from '../../../../../constants/routerConstants';

const PopularQuestionBody = (props) => {
    const { popularQuestion } = props
    return (
        <div className='card-body-wrap questions'>
            <ul className="list-unstyled">
                {
                    popularQuestion.map((item, key) => {

                        return <li className="question-list" key={key}>
                            <div className="questions-items">
                                <div className="asked-question">
                                    <p>
                                        <span className="question-mark-wrap">
                                            <i className="kool-question"></i>
                                        </span>
                                        <span>{item.question}</span>
                                    </p>
                                </div>
                                <div className="added-tags">
                                    <ul className="list-unstyled">
                                        {
                                            item.hashTag.map((tags, key) => {
                                                return <li key={key}>
                                                    <Link to={tags.tagLink} className="expand">{tags.tagName}</Link>
                                                </li>
                                            })

                                        }
                                    </ul>
                                </div>
                                <div className="profile-item">
                                    <Link to={RouterConstants.landing}>
                                        <div className="talk-to-person d-flex d-flex align-items-center">
                                            <div className="profile-wrapper">
                                                <Profile srcImage={item.profileImage} />
                                            </div>
                                            <div className="person-detail">
                                                <h4 className="mb-auto">{item.userName}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default PopularQuestionBody;