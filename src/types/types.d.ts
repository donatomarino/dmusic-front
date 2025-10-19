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