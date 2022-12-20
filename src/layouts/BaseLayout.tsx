import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { store, loadMeData } from '../stores/store'
import { Avatar, Layout, Space } from 'antd'
import { SideMenu } from '../components/SideMenu'
import { Outlet } from 'oh-router-react'
import s from './style.module.scss'

const { Sider, Content, Header } = Layout
export const BaseLayout: React.FC = () => {
  const { me } = useSnapshot(store)
  useEffect(() => {
    loadMeData()
  }, [])

  return (
    <Layout id={s.container}>
      <Sider className={s.sider}>
        <h1 className={s.logo}>CLOUDADMIN</h1>
        <SideMenu />
      </Sider>
      <Layout id={s.innerLayout}>
        <Header className={s.header}>
          <Space>
            <Avatar size='large' src={me.avatar} />
          </Space>
        </Header>
        <Content className={s.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
