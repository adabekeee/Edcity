import { useRef } from 'react';
import './VideoPlayer.css'
import only_video from "../../assets/video.mp4"


const VideoPlayer = ({playVideo, setPlayVideo}) => {

  const player = useRef(null);
  
  const closePlayer = (e) => {
    if (e.target == player.current){
      setPlayVideo(false);
    }
  }

  return (
    <div className={`video_player ${playVideo? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={only_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
