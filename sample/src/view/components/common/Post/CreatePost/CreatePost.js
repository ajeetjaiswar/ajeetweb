import React, { Component } from 'react';
import { AttachedLink, Camera, VideoCamera } from '../../../../../assets/images';

class CreatePost extends Component {
    render() {
        return (
            <div className="create-post">
                <div className="card-wrapper">
                    <ul className="list-unstyled d-flex align-items-center">
                        <li>
                            <img src={AttachedLink} alt={AttachedLink}/>
                        </li>
                        <li>
                            <span>What's in your mind..</span>
                        </li>
                        <li className="ml-auto">
                            <img src={AttachedLink} alt={AttachedLink} />
                        </li>
                        <li>
                            <img src={Camera} alt={Camera} />
                        </li>
                        <li>
                            <img src={VideoCamera} alt={VideoCamera} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CreatePost;