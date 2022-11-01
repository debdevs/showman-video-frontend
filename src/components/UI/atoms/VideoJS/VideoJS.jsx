import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import videojs from 'video.js';
import './VideoJS.css';
import '@videojs/themes/dist/sea/index.css';
const VideoJS = ({ options, themeName = 'sea' }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);
  const video_width = '307.2px';
  const video_height = '512px';
  return (
    <div
      data-vjs-player
      style={{ width: video_width, height: video_height }}
      key={'my_video_const'}
      id={0}
      className="const"
    >
      <video
        ref={videoRef}
        // className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}
        className="video-js vjs-default-skin"
        key={'my_video_const'}
        id={0}
      />
    </div>
  );
};

export default VideoJS;
