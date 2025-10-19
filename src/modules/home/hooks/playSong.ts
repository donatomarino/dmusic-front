import { homeServices } from "../services/HomeServices";
import { SongType } from "../../../types/types";
import { SongContext } from "../../../context/SongContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export const playSong = () => {
  const {toggleSong} = useContext(SongContext);
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

    return {handleSong}
}