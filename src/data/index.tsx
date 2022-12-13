import { ItemType } from 'antd/es/menu/hooks/useItems'
import {
  HomeOutlined,
  RocketOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const MenuItems: ItemType[] = [
  {
    key: '/home',
    label: '主页',
    icon: <HomeOutlined />,
  },
  {
    key: '/games',
    label: '比赛管理',
    icon: <RocketOutlined />,
  },
  {
    key: '/users',
    label: '选手管理',
    icon: <UserOutlined />,
  },
  {
    key: '/subjects',
    label: '赛题管理',
    icon: <BookOutlined />,
  },
  {
    key: '/system',
    label: '系统设置',
    icon: <SettingOutlined />,
  },
]
const tableTitleMap: Record<string, string> = {
  title: '名称',
  status: '比赛状态',
  people_num: '参赛人数',
  level: '难度等级',
  created_at: '创建时间',
}

const statusMap: Record<number, string> = {
  0: '未开始',
  1: '进行中',
  2: '已结束',
}

const levelMap: Record<number, string> = {
  0: '困难',
  1: '中等',
  2: '简单',
}


export { MenuItems, tableTitleMap, statusMap, levelMap }
