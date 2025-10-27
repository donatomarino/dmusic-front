import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
import { ENV } from "./constants/constants";

const baseURL = ENV.VITE_API_URL;

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

// Interceptor de solicitud
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  function (error: AxiosError): Promise<never> {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

export default instance;
