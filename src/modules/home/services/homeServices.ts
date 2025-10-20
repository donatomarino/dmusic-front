import instanceAxios from '../../../api/APIUtils';
import type { BaseApiResponse, DataArtists, DataSongs, PlaySongRequest, Requests } from '../../../types/types';

export const homeServices = {
  getArtists(): Promise<Requests<DataArtists[]>> {
    return instanceAxios.getRequest({ url: '/get-artists' });
  },
  getSongs(): Promise<Requests<DataSongs[]>> {
    return instanceAxios.getRequest({ url: '/get-songs' });
  },
  searchSong(song: string): Promise<Requests<DataSongs[]>> {
    return instanceAxios.postRequest({
      url: '/search-song',
      data: { song }
    });
  },
  playSong(id: string): Promise<Requests<PlaySongRequest[]>> {
    return instanceAxios.postRequest({
      url: `/play-song/${id}`,
    })
  },
  addFavoriteSong(data: [{ song_id: string; user_id: string }]): Promise<BaseApiResponse> {
    return instanceAxios.postRequest({
      url: '/add-favoritesongs',
      data: data
    });
  }
};