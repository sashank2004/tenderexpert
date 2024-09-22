import React from 'react'
import video from '/assets/ai-video.mp4'
import './style.css';

const PlayVideo = () => {
  return (
    <div className='video'>
      <video className='ai-video' controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default PlayVideo