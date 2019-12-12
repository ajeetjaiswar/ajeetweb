import React from 'react';
import { Link } from 'react-router-dom'
import { ProfileImage } from '../../../../assets/images';
import { Profile } from '..';

const ProfileDropdown = (props) => {
    return (
        <div className="dropdown-profile">
            <div className="profile-dropdown">
                <div className="profile-header d-flex">
                    <div className="profile-wrapper">
                        <Profile srcImage={ProfileImage} alt={'profile image'} />
                    </div>
                    <div className="profile-description d-flex flex-column">
                        <h5>Vanshika Goenka</h5>
                        <label>Co-Founder</label>
                        <Link to="/profile">VIEW PROFILE</Link>
                    </div>
                </div>
                <div className="profile-body">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/edit-profile">Edit Profile</Link>
                        </li>
                        <li>
                            <Link to="/collaboration">Collaboration</Link>
                        </li>
                        <li>
                            <Link to="/account-setting">Account Settings</Link>
                        </li>
                        <li>
                            <Link to="/my-activity">My Activity</Link>
                        </li>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li onClick={props.handleLogOut}>
                            <a href="javascript:void(0);">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;
