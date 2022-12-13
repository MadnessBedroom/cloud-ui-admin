import { Layout } from 'antd'
import { SideMenu } from '../components/SideMenu'
import { Outlet } from 'oh-router-react'
import s from './style.module.scss'

const { Sider, Content, Header } = Layout
export const BaseLayout: React.FC = () => {
  return (
    <Layout id={s.container}>
      <Sider className={s.sider}>
        <h1 className={s.logo}>CLOUDADMIN</h1>
        <SideMenu />
      </Sider>
      <Layout id={s.innerLayout}>
        <Header className={s.header}></Header>
        <Content className={s.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
