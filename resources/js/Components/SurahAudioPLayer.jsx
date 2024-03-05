import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";



export default function SurahAudioPlayer  ({ audioSrc })  {

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const audioRef = useRef(null)



useEffect(() => {
    window.onload = () => {
        setDuration(audioRef.current.duration)
    }
}, []);



  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  }

  const handlePlay = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    if(isPlaying) {
        handlePause()
    }else{
        handlePlay()
    }
  }

console.log(duration);
  function formatDuration(durationSeconds) {
    const hours = Math.floor(durationSeconds / 3600);
    const minutes = Math.floor((durationSeconds % 3600) / 60);
    const seconds = Math.floor(durationSeconds % 60);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate)
    if(audioRef.current.addEventListener("timeupdate", handleTimeUpdate)) {
        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate)
        }
    }

  }, []);







  return (
    <div className="card relative overflow-hidden bg-gray-800 text-white p-[5px] rounded-xl border-[1px] border-[rgba(255,255,255,0.1)] w-full">
        <input type="range" name="" min="0" max={duration} value={currentTime} onChange={handleSeek} className="w-[100%]" id="" />
        <audio ref={audioRef} src={audioSrc} ></audio>
        <div className="flex flex-row justify-between">
            <p>{formatDuration(currentTime)}</p>
            <button onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <p>{formatDuration(duration)}</p>
        </div>

    </div>
  );
};


