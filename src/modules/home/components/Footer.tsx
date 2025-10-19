import { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Footer.css";
import { SongContext } from "../../../context/SongContext";

const Footer = () => {
  const {song} = useContext(SongContext);
  const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handleClickPrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="col-span-4 flex flex-col gap-1 bg-header p-2">
      <div className="text-primary text-lg font-medium">
        {song[0].title}
      </div>

      <AudioPlayer
        key={song[0]?.url} // fuerza re-render al cambiar track
        src={song[0]?.url}
        showJumpControls={false}
        showSkipControls={true}
        autoPlay={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Footer;
