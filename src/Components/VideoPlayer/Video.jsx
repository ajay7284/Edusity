import React from 'react';
import './Video.css'
import video from '../../assets/college-video.mp4'

const Video = ({playState,setPlayState}) => {
    return (
        <div className={`video-player ${playState? '' : 'hide'}`}>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
}

export default Video;
