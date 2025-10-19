import instanceAxios from '../../../api/APIUtils';
import type { BaseApiResponse, RegisterPayload } from '../../../types/types';

export const regService = {
  register: (data: RegisterPayload): Promise<BaseApiResponse> =>
    instanceAxios.postRequest({ url: '/register', data: { email: data.email, password: data.password, full_name: data.full_name } })
};