import instanceAxios from '../../../api/APIUtils';
import type { BaseApiResponse, DataArtists, DataSongs, PlaySongRequest, Requests } from '../../../types/types';

export const homeServices = {
  getArtists(): Promise<Requests<DataArtists[]>> {
    return instanceAxios.getRequest({ url: '/get-artists' });
  },
  getSongs(): Promise<Requests<DataSongs[]>> {
    return instanceAxios.getRequest({ url: '/get-songs' });
  },
  searchSong(song_id: string): Promise<Requests<DataSongs[]>> {
    return instanceAxios.postRequest({
      url: `/search-song/${song_id}`,
    });
  },
  playSong(song_id: string): Promise<Requests<PlaySongRequest[]>> {
    return instanceAxios.postRequest({
      url: `/play-song/${song_id}`,
    })
  },
  addFavoriteSong(song_id: string): Promise<BaseApiResponse> {
    return instanceAxios.postRequest({
      url: `/add-favorite-song/${song_id}`,
    });
  },
  getFavoriteSong(): Promise<Requests<DataSongs[]>> {
    return instanceAxios.postRequest({
      url: `/get-favorite-songs`,
    })
  },
  deleteFavoriteSong(song_id: string): Promise<BaseApiResponse> {
    return instanceAxios.deleteRequest({
      url: `/delete-favorite-song/${song_id}`,
    })
  }
};