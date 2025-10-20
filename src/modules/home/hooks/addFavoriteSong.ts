import { toast } from "react-toastify";
import { homeServices } from "../services/HomeServices";

export const addFavoriteSong = () => {
  const handleFavoriteSong = async (song_id: string): Promise<void> => {
    try {
      console.log('ok');
      const user = localStorage.getItem('user_id') || '';
      const formData = {
        user_id: user,
        song_id: song_id
      }

      const res = await homeServices.addFavoriteSong([formData]);

      res.success ? toast.success('Canción agregada a favoritos') : toast.error('La canción ya está en favoritos');

    } catch (e) {
      console.error('Ha habido un problema al agregar la canción a favoritos', e);
    }
  }

  return { handleFavoriteSong };
};
