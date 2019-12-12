import React from 'react';
import ReactPlayer from 'react-player';

const VideoCard = (props) => {
    return (
        <div className="video-player-wrapper">
            <ReactPlayer url={props.Video} light={props.thumbnail} className="video-wrapper" controls={true} />
        </div>
    );
};

export default VideoCard;