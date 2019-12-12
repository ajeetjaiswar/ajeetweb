import React from 'react';
import { Badge, Profile } from '..';
import { ProfileImage } from '../../../../assets/images';

const NotificationDropdown = () => {
    return (
        <div className="dropdown-wrapper">
            <div className="notification">
                <div className="notification-header d-flex align-items-center justify-content-center">
                    <h5 className="mr-2">Notifications</h5>
                    <Badge
                        bageClass="kool-badge-purple d-flex align-items-center justify-content-center"
                        badgeText="20"
                    />
                </div>
                <div className="notification-list-body">
                    <ul className="notification-list">
                        <li className="d-flex">
                            <div className="profile-wrapper">
                                <Profile srcImage={ProfileImage} alt={'profile image'} />
                            </div>
                            <p>
                                <span className="font-weight-bold">Preeti Patil</span> commented on your post
                                                            </p>
                            <label>25 min</label>
                        </li>
                        <li className="d-flex unread">
                            <div className="profile-wrapper">
                                <Profile srcImage={ProfileImage} alt={'profile image'} />
                            </div>
                            <p>
                                <span className="font-weight-bold">Preeti Patil</span> commented on your post
                                                            </p>
                            <label>10 min</label>
                        </li>
                        <li className="d-flex">
                            <div className="profile-wrapper">
                                <Profile srcImage={ProfileImage} alt={'profile image'} />
                            </div>
                            <p>
                                <span className="font-weight-bold">Preeti Patil</span> commented on your post
                                                            </p>
                            <label>1 min</label>
                        </li>
                    </ul>
                </div>
                <div className="notigication-footer">
                </div>
            </div>
        </div>
    );
};

export default NotificationDropdown;