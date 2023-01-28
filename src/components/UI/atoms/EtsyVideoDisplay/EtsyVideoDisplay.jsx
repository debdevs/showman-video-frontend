import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import VideoJS from '../VideoJS/VideoJS';
import video_file from '../../../../assets/videos/video.mp4';
import { useRef } from 'react';
export const EtsyVideoDisplay = ({ props, video_height, video_width }) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: video_file,
        type: 'video/mp4',
        options: true,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  // const video_width = '307.2px';
  // const video_height = '512px';
  return (
    <>

      <VideoJS
        options={videoJsOptions}
        onReady={handlePlayerReady}
        video_height={video_height}
        video_width={video_width}
        
      />
  
    </>
  );
};

export default EtsyVideoDisplay;
