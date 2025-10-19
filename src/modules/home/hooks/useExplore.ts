import { useContext, useEffect, useState } from "react"
import { DataSongs, SongType } from "../../../types/types"
import { homeServices } from "../services/HomeServices"
import { toast } from "react-toastify";
import { SongContext } from "../../../context/SongContext";

export const useExplore = () => {
  const [songs, setSongs] = useState<Array<DataSongs>>([]);
  const { toggleSong } = useContext(SongContext);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await homeServices.getSongs();
        if (res.success) setSongs(res.data);
        else console.error("Ha habido un problema en la solicitud de las playlists: ", res.message);
      } catch (e) {
        console.error("Error en la solicitud: ", e);
      }
    };
    fetchSongs();
  }, []);

  const handleSong = async (id: string) => {
    if (localStorage.getItem('token')) {
      try {
        const res = await homeServices.playSong(id)
        console.log(res);

        if (res.success) {
          const formattedTracks: SongType[] = [];

          res.data.map(e => {
            formattedTracks.push({
              url: `http://localhost:5001/${e.url}`,
              title: `${e.title}`,
              tags: ["music"]
            })
          })
          
          toggleSong(formattedTracks);
        }
      } catch (e) {
        console.error('Ha habido un problema en la solicitud', e)
      }
    } else {
      toast.error('Debes iniciar sesión para poder reproducir música');
    }
  }

  return { songs, handleSong }
}