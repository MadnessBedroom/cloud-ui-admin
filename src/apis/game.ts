// 获取比赛列表

import { AxiosPromise } from 'axios'
import { ajax } from '../libs/ajax'

export const list = (): AxiosPromise => {
  return ajax.get('/api/v1/games')
}
