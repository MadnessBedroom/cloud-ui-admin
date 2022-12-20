import axios from 'axios'
import { getToken } from '../utils/token'
import { message as Message } from 'antd'

axios.defaults.baseURL = isDev ? '/' : '服务器地址'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000
// 允许服务端向客户端写入cookie
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (typeof token !== 'undefined' && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Message.error(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(res)
      }, 500)
    )
  },
  (err) => {
    return Promise.reject(err)
  }
)

export const ajax = {
  get: <T>(path: string) => {
    return axios.get<T>(path)
  },
  post: <T>(path: string, data: JSONValue) => {
    return axios.post<T>(path, data)
  },
}
