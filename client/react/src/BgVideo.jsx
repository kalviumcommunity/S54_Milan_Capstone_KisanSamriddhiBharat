import React from 'react'
import video from './assets/video.mp4'

function BgVideo() {
  return (
    <div className="bgContainer">
      <div className="overlay">
       <video src={video} autoPlay loop muted />
       <div className="container">
        <h2 className="title">Welcome</h2>
        <h3 className="wlc">"Behind every meal, there's a farmer's toil, a testament to their commitment to feeding nations and nurturing the soil that sustains us all."</h3>
       </div>
      </div>
      <div className="chat"></div>
    </div>
  )
}

export default BgVideo