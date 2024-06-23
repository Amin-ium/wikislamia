import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("audio", { ref: audioRef, src: audioList }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx("button", { onClick: handlePlayClick, disabled: isPlaying, className: ` playBtn bg-lightBg  px-2 rounded`, children: "Play" }),
      /* @__PURE__ */ jsx("button", { className: "pauseBtn bg-lightBg text-darkText px-2 rounded", onClick: handlePauseClick, disabled: !isPlaying, children: "Pause" })
    ] })
  ] });
};
const AudioPlayer$1 = AudioPlayer;
export {
  AudioPlayer$1 as A
};
