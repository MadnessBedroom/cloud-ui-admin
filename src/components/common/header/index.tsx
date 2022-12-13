import { Avatar, Button, Layout, Space } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { router as r } from '../../../routes'
import { removeToken } from '../../../utils/token'
import s from './style.module.scss'

const { Header } = Layout
export const Component: React.FC = () => {
  const handleLogout = () => {
    removeToken()
    r.navigate('/login')
  }

  return (
    <Header className={s['headerWrapper']} style={{ height: '50px' }}>
      <Space size={'middle'} align='center'>
        <Avatar size={'large'} />
        <Button
          type='primary'
          icon={<LogoutOutlined />}
          danger
          onClick={handleLogout}>
          登出
        </Button>
      </Space>
    </Header>
  )
}
