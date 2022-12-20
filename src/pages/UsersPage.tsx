import { Button, Card } from "antd"
import useSWRInfinite from 'swr/infinite'
import { ajax } from "../libs/ajax"

const getKey = (pageIndex: number, prev: Resources<User>) => {
  if (prev) {
    const sendCount =
      (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
    const count = prev.pager.count
    if (sendCount >= count) {
      return null
    }
  }
  return `/api/v1/users?page=${pageIndex + 1}`
}
export const UsersPage: React.FC = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    getKey,
    async (path) => (await ajax.get<Resources<User>>(path)).data,
    { revalidateFirstPage: false }
  )

  if (!data) {
    return <div>
      {error && '数据加载失败😔'}
    </div>
  } else {
    const last = data[data.length - 1]
    const { pager: { page, per_page }, resources } = last
    return <>
      <Card
        title='选手管理'
      >
      </Card>
    </>
  }
}