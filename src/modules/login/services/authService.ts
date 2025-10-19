import instanceAxios from '../../../api/APIUtils';
import type { LoginPayload, AuthResponse, BaseApiResponse } from '../../../types/types';

export const authService = {
  login: (data: LoginPayload): Promise<AuthResponse | BaseApiResponse> =>
    instanceAxios.postRequest({ url: '/login', data: { email: data.email, password: data.password } })
};