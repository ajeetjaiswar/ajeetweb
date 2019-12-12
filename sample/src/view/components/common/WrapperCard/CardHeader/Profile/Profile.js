import React from 'react';

const Profile = (props) => {
    return (
        <div className="profile">
            <img src={props.srcImage} alt={props.alt}/>
        </div>
    );
};

export default Profile;