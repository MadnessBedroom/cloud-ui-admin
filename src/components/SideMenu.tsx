import { Menu } from 'antd'
import { router as r } from '../routes'
import { MenuItems } from '../data'

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
