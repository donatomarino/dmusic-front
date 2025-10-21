import { toast } from "react-toastify";
import { homeServices } from "../services/HomeServices";

export const addFavoriteSong = () => {
  const handleFavoriteSong = async (song_id: string): Promise<void> => {
    try {
      const res = await homeServices.addFavoriteSong(song_id);

      res.success && toast.success('Canción agregada a favoritos');

    } catch (e: any) {
      if(e.error === 409){
        toast.error('La canción ya está en favoritos');
        return;
      }
      console.error('Ha habido un problema al agregar la canción a favoritos', e);
    }
  }

  return { handleFavoriteSong };
};
