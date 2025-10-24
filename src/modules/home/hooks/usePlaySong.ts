import { SongContext } from "../../../context/SongContext";
import { useContext } from "react";
import { musicServices } from "../services/musicServices";

export const playSong = () => {
    const { toggleSong } = useContext(SongContext);
    const handleSong = async (song_id: string, url: string) => {
      const formattedTracks = await musicServices.handlePlaySong(song_id, url);
      toggleSong(formattedTracks);
    }
    return { handleSong };
}