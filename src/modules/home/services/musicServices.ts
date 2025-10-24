import instanceAxios from '../../../api/APIUtils';
import type { Requests, PlaySongRequest, BaseApiResponse } from '../../../types/types';
import { SongType } from '../../../types/types';
import { toast } from 'react-toastify';

export const musicServices = {
  async handlePlaySong(song_id: string, url: string): Promise<SongType[]> {
    if (!localStorage.getItem('token')) {
      toast.error('Debes iniciar sesión para poder reproducir música');
      throw new Error('Token no encontrado');
    }

    try {
      const res: Requests<PlaySongRequest[]> = await instanceAxios.postRequest({
        url: `/${url}/${song_id}`,
      });

      const formattedTracks: SongType[] = res.data.map((e: PlaySongRequest) => ({
        url: `http://localhost:5001/${e.url}`,
        title: `${e.title}`,
        tags: ["music"]
      }));

      return formattedTracks;
    } catch (e) {
      console.error('Ha habido un problema en la solicitud', e);
      throw e;
    }
  },
  async handleFavoriteSong(song_id: string): Promise<void> {
    try {
      const res: BaseApiResponse = await instanceAxios.postRequest({
        url: `/add-favorite-song/${song_id}`,
      });

      res.success && toast.success('Canción agregada a favoritos');
    } catch (e: any) {
      if (e.error === 409) {
        toast.error('La canción ya está en favoritos');
        return;
      }
      console.error('Ha habido un problema al agregar la canción a favoritos', e);
    }
  }
};