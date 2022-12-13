import { AxiosPromise } from 'axios'
import { ajax } from '../libs/ajax'

// 登录接口
export const login = (data: JSONValue): AxiosPromise<Result<Login>> => {
  return ajax.post('/api/v1/login', data)
}

// 获取用户信息接口
export const me = (): AxiosPromise<Result<IUser>> => {
  return ajax.get('/api/v1/me')
}
