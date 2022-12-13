import { Badge, Button, Card, message, Space, Table, Tag } from 'antd'
import ButtonGroup from 'antd/es/button/button-group'
import { PlusCircleOutlined, ExportOutlined } from '@ant-design/icons'
import moment from 'moment'
import useSWRInfinite from 'swr/infinite'
import { ajax } from '../../libs/ajax'
import { getStatusColor, getLevelColor } from '../../utils'
import { levelMap, statusMap, tableTitleMap } from '../../data'

const handleColumns = (keyArr: any) => {
  return keyArr
    .filter((k: string) => k in tableTitleMap)
    .map((key: string) => {
      switch (key) {
        case 'status':
          return {
            title: tableTitleMap[key],
            key: key,
            render: (g: Game) => (
              <Badge
                color={getStatusColor(g.status)}
                text={statusMap[g.status]}
              />
            ),
          }
        case 'people_num':
          return {
            title: tableTitleMap[key],
            key,
            render: (g: Game) => {
              return `${g.people_count}/${g.people_num} 人`
            },
          }
        case 'level':
          return {
            title: tableTitleMap[key],
            key,
            render: (g: Game) => {
              return (
                <Tag color={getLevelColor(g.level)}>{levelMap[g.level]}</Tag>
              )
            },
          }
        case 'created_at':
          return {
            title: tableTitleMap[key],
            key,
            render: (g: Game) => {
              return moment(g.created_at).format('YYYY-MM-DD')
            },
          }
        default:
          return {
            title: tableTitleMap[key],
            key: key,
            dataIndex: key,
          }
      }
    }) as Array<any>
}

const getKey = (pageIndex: number, prev: Resources<Game>) => {
  if (prev) {
    const sendCount =
      (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
    const count = prev.pager.count
    if (sendCount >= count) {
      return null
    }
  }
  return `/api/v1/games?page=${pageIndex + 1}`
}
export const GamesPage: React.FC = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    getKey,
    async (path) => (await ajax.get<Resources<Game>>(path)).data,
    { revalidateFirstPage: false }
  )
  // 导出Excel
  const exportExcel = () => message.warning('功能开发中!', 1)
  // 页码改变时
  const onPageChange = (page: number) => setSize(page)
  // 管理比赛
  const manageGame = () => message.warning('功能开发中!', 1)
  // 删除比赛
  const deleteGame = () => message.warning('功能开发中!', 1)
  // 添加比赛
  const addGame = () => message.warning('功能开发中', 1)
  const isLoadingInitData = !data && !error
  const isLoadingNextPage = data?.[size - 1] === undefined && !error
  const isLoading = isLoadingInitData || isLoadingNextPage
  if (!data) {
    return (
      <div>
        {error && '数据加载失败'}
        {isLoading && '数据加载中'}
      </div>
    )
  } else {
    const last = data[data.length - 1]
    const { page, per_page, count } = last.pager
    const { resources } = last
    const keys = Object.keys(resources[0])
    const columns = handleColumns(keys)
    columns.push({
      title: '操作',
      key: 'action',
      fixed: 'right',
      render: (game: Game) => {
        return (
          <ButtonGroup>
            <Button type='link' onClick={manageGame}>
              管理
            </Button>
            <Button
              type='link'
              danger
              disabled={game.status === 1}
              onClick={deleteGame}>
              删除
            </Button>
          </ButtonGroup>
        )
      },
    })
    return (
      <Card
        title={'比赛管理'}
        extra={
          <Space>
            <Button
              type='primary'
              icon={<PlusCircleOutlined />}
              onClick={addGame}>
              添加比赛
            </Button>
            <Button
              type='default'
              icon={<ExportOutlined />}
              onClick={exportExcel}>
              导出Excel
            </Button>
          </Space>
        }>
        <Table
          tableLayout='auto'
          rowKey={(game: Game) => game.id}
          columns={columns}
          dataSource={resources}
          pagination={{
            size: 'small',
            current: size,
            total: count,
            pageSize: per_page,
            defaultPageSize: per_page,
            defaultCurrent: page,
            hideOnSinglePage: true,
            showTitle: true,
            onChange: onPageChange,
            showPrevNextJumpers: false,
            position: ['bottomCenter'],
          }}></Table>
      </Card>
    )
  }
}
