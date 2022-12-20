import useSWR from 'swr'
import { ajax } from '../libs/ajax'

export const useMe = () => {
  const { data, error, isLoading } = useSWR('/api/v1/me',
    async (path) => (await ajax.get<Result<IUser>>(path)).data.resource
  )

  return {
    data,
    error,
    isLoading
  }
}