import { Spin } from 'antd'
import useSWR from 'swr'
import { ajax } from '../../libs/ajax'

export const HomePage: React.FC = () => {
  // 请求管理员信息
  const { data: meData, error: meError } = useSWR(
    '/api/v1/me',
    async (path) => (await ajax.get<Result<IUser>>(path)).data.resource
  )

  const isLoadingMe = !meData

  if (isLoadingMe) {
    return <Spin />
  }
  console.log(meData)
  return <div>这是一个主页</div>
}
