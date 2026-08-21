// src/api/httpClient.ts
import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.API_BASE_URL ?? 'https://api.example.com',
  timeout: 10000,
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 共通エラーログ出力（暫定）
    console.error('[API ERROR]', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default httpClient;// HTTP client for API requests
