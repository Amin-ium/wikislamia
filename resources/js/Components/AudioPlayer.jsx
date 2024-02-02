import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioList, index, isPlaying, onPlay, onPause }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    onPlay(index);
  };

  const handlePauseClick = () => {
    onPause();
  };

  console.log(isPlaying);

  return (
    <div>
      <figure>
        <audio ref={audioRef}  src={audioList}></audio>
      </figure>
      <div className='flex flex-col gap-3'>
      <button onClick={handlePlayClick} disabled={isPlaying} className={` playBtn bg-lightBg  px-2 rounded`} >
        Play
      </button>
      <button className='pauseBtn bg-lightBg text-darkText px-2 rounded' onClick={handlePauseClick} disabled={!isPlaying}>
        Pause
      </button>
      </div>


    </div>
  );
};

export default AudioPlayer;
