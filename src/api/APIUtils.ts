import instance from "../config/axios.config";
import { AxiosResponse } from "axios";
import { AuthResponse, BaseApiResponse, RequestParams, Requests } from "../types/types";

export default {
  getRequest: async <T = any>({ url, params = {} }: RequestParams): Promise<Requests<T>> => {
    try {
      const res: AxiosResponse = await instance.get(url, { params });
      return res.data as Requests<T>;
    } catch (e: any) {
      return (e as Requests<T>);
    }
  },

  postRequest: async <T = any>({
    url,
    data = {},
    params = {},
  }: RequestParams): Promise<Requests<T>> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.post(url, data, { params, headers });
      return res.data as Requests<T>;
    } catch (e: any) {
      throw (e.response?.data || e);
    }
  },

  deleteRequest: async ({ url, params = {} }: RequestParams): Promise<BaseApiResponse> => {
    try {
      const res: AxiosResponse = await instance.delete(url, { params });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },
};
