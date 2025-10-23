import { useEffect, useState } from "react";
import { DataSongs } from "../../../types/types";
import { homeServices } from "../services/homeServices";
import { toast } from "react-toastify";

export const useLibrary = () => {
  const [library, setLibrary] = useState<Array<DataSongs>>([]);

  useEffect(() => {
    fetchLibrary();
  }, []);

  const fetchLibrary = async () => {
    try {
      const res = await homeServices.getFavoriteSong();

      res.success ? setLibrary(res.data) : toast.error(`Ha habido un problema: ${res.message}`);
    } catch (e) {
      console.error('Error en la solicitud: ', e)
    }
  }

  const deleteSong = async (song_id: string): Promise<void> => {
    try {
      await homeServices.deleteFavoriteSong(song_id);

      // No he puesto condición porque se puede eliminar siempre que exista en favoritos
      toast.success('Canción eliminada de favoritos');
      fetchLibrary();
    } catch (e) {
      console.error('Ha habido un problema al eliminar la canción de favoritos', e);
    }
  }

  return { library, deleteSong };
}