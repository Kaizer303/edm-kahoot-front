import axios from 'axios'

import configs from '@/configs'

const http = axios.create({
  baseURL: configs.API_URL,
  withCredentials: true,
})

const api = {
  async request<T = any>(...params: Parameters<(typeof http)['request']>) {
    return http.request<T>(...params)
  },
  async get<T = any>(...params: Parameters<(typeof http)['get']>) {
    return http.get<T>(...params)
  },
  async post<T = any>(...params: Parameters<(typeof http)['post']>) {
    return http.post<T>(...params)
  },
  async put<T = any>(...params: Parameters<(typeof http)['put']>) {
    return http.put<T>(...params)
  },
  async patch<T = any>(...params: Parameters<(typeof http)['patch']>) {
    return http.patch<T>(...params)
  },
  async delete<T = any>(...params: Parameters<(typeof http)['delete']>) {
    return http.delete<T>(...params)
  },
}

export default api