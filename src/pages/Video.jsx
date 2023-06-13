import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Video = () => {
const {video,isLoading}=useSelector((store)=>store.playlist)
  return (
    <div>
        {isLoading && <Loader/>}
       <ReactPlayer
        url={`https://api.soundcloud.com/tracks/${video.id}`}
        width="100vw"
        height="100vh"
        controls
        onBuffer={<Loader/>}
      />
    </div>
  )
}

export default Video
