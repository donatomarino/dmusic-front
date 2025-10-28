import { SongContext } from "../../../context/SongContext";
import { useContext } from "react";
import { musicServices } from "../services/musicServices";

export const usePlaySong = () => {
    const { toggleSong } = useContext(SongContext);
    const handleSong = async (song_id: string, url: string) => {
      const formattedTracks = await musicServices.handlePlaySong(song_id, url);
      console.log(formattedTracks);
      toggleSong(formattedTracks);
    }
    return { handleSong };
}