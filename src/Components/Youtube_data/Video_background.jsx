import React from 'react'
import YouTube from 'react-youtube'
import './Video-background.css'

const Video_background = () => {
    const opts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            loop: 1,
            mute: 1,
            playlist: 'https://youtu.be/k02KIdkoJt8?si=13xQWOz2obDw29-9',
        },
    }
  return (
    <div className='video-background'>
        <YouTube videoId='https://youtu.be/k02KIdkoJt8?si=13xQWOz2obDw29-9' opts={opts} />
    </div>
  )
}

export default Video_background