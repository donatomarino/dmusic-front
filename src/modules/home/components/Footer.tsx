import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Footer.css";
import { SongContext } from "../../../context/SongContext";

const Footer = () => {
  const { song, currentIndex, playNext, playPrev, playerRef } = useContext(SongContext);
  const currentTrack = song[currentIndex];

  return (
    <div className="col-span-5 md:col-span-4 flex flex-col gap-1 bg-header p-2">
      <p className="text-primary text-lg font-medium">{currentTrack?.title}</p>
      <AudioPlayer
        key={currentTrack?.url}
        ref={playerRef}
        src={currentTrack?.url}
        showSkipControls
        showJumpControls={false}
        onClickNext={playNext}
        onClickPrevious={playPrev}
        autoPlayAfterSrcChange
      />
    </div>
  );
}

export default Footer;
