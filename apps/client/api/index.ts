import axios, { type AxiosRequestConfig } from 'axios';
import { DefaultApi } from 'api-client';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

const axiosClient = axios.create(axiosConfig);

const apiClient = new DefaultApi(
  {
    isJsonMime: () => false,
    basePath: baseURL,
  },
  baseURL,
  axiosClient,
);

export * from 'api-client';
export default apiClient;
