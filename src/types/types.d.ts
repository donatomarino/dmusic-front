export interface LoginPayload {
  email: string;
  password: string;
  showPassword?: boolean;
}

export interface BaseApiResponse {
  success: boolean;
  message: MessageObject;
  data?: Array<Restaurant>
  error?: boolean;
}

export interface AuthResponse extends BaseApiResponse {
  access_token: string,
  token_type: string;
}

export interface RequestParams {
  url: string;
  data?: object;
  params?: Record<string, string | number | boolean>;
}

export interface RegisterPayload extends LoginPayload {
  confirm_pass: string;
  full_name: string;
}