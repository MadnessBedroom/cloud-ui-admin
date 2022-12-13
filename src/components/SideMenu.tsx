import { Menu } from 'antd'
import { router as r } from '../routes'
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
export const SideMenu: React.FC = () => {
  const { pathname } = r.location!
  const handleItemClick = (value: any) => {
    r.navigate(value.key)
  }

  return (
    <Menu
      theme='dark'
      items={MenuItems}
      mode='vertical'
      defaultSelectedKeys={[pathname]}
      onClick={handleItemClick}
    />
  )
}
