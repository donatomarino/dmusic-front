import { useEffect, useState } from "react"
import { BaseApiResponse, DataSongs } from "../../../types/types"
import { homeServices } from "../services/HomeServices"

export const useExplore = () => {
  const [songs, setSongs] = useState<Array<DataSongs>>([]);

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

  return { songs }
}