export interface RequestParams {
  url: string;
  data?: object;
  params?: Record<string, string | number | boolean>;
}

export interface LoginPayload {
  email: string;
  password: string;
  showPassword?: boolean;
}

export interface RegisterPayload extends LoginPayload {
  confirm_pass: string;
  full_name: string;
}

export interface BaseApiResponse {
  success: boolean;
  message: string;
  error?: boolean;
  initial_name?:char;
}

export interface Requests<T> extends BaseApiResponse {
  data: T;
}

export interface AuthResponse extends BaseApiResponse {
  access_token: string,
  token_type: string;
}

export interface DataArtists {
  id: string;
  full_name: string;
  avatar: string;
}

export interface DataSongs {
  id: string;
  title: string;
  duration: string;
  url: string;
  image: string;
  artist: DataArtists;
}

export interface PlaySongRequest {
  title: string;
  url: string;
}

export interface SongType extends PlaySongRequest {
  tags: string[];
}

export interface VerifiedAuth {
  auth: boolean;
}

export interface ComponentContextType {
  component: number;
  toggleComponent: (newComponent: number) => void;
}

export interface ComponentProviderProps {
  children: ReactNode;
}

export interface SearchContextType {
  search: DataSongs[];
  toggleSearch: (value: DataSongs[]) => void;
  error: string;
  setError: (msg: string) => void;
}

export interface SearchProviderProps {
  children: ReactNode;
}

export interface SongContextType {
  song: SongType[];
  toggleSong: (value: SongType[]) => void;
}

export interface SongProviderProps {
  children: ReactNode;
}