import { proxy } from 'valtio'
import { ajax } from '../libs/ajax'

export const store = proxy<IStore>({
  me: {},
})

export const loadMeData = async () => {
  const data = (await ajax.get<Result<IUser>>('/api/v1/me')).data
  store.me = data.resource
}
