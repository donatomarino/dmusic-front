import instanceAxios from '../../../api/APIUtils';
import type { BaseApiResponse, DataArtists, DataSongs, Requests } from '../../../types/types';

export const homeServices = {
  getArtists(): Promise<Requests<DataArtists[]>> {
    return instanceAxios.getRequest({ url: '/get-artists' });
  },
    getSongs(): Promise<Requests<DataSongs[]>> {
    return instanceAxios.getRequest({ url: '/get-songs' });
  },
};