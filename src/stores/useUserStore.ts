import create from 'zustand'
import { userApi } from '../apis'

interface UserState {
  user: any
}

const init = async () => {
  const { data } = await userApi.me()
  return data.resource
}

export const useUserStore = create<UserState>((set) => ({
  user: init(),
}))
