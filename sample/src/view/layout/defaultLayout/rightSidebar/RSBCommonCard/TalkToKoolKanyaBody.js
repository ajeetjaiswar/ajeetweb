import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../../../../components/common';
import RouterConstants from '../../../../../constants/routerConstants';

const TalkToKoolKanyaBody = (props) => {
    const { talkToKool } = props
    return (
        <div className='card-body-wrap talk-to-koolkanya'>
            <ul className="list-unstyled">
                {
                    talkToKool.map((item, key) => {
                        return <li key={key}>
                            <Link to={RouterConstants.landing}>
                                <div className="talk-to-person d-flex">
                                    <div className="profile-wrapper">
                                        <Profile srcImage={item.profileImage} />
                                    </div>
                                    <div className="person-detail d-flex flex-column">
                                        <h4 className="mb-auto">{item.userName}</h4>
                                        <label className=" mt-auto">{item.designation}</label>
                                    </div>
                                    <div className="chat-symbol-wrap ml-auto">
                                        <i className="kool-message"></i>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default TalkToKoolKanyaBody;