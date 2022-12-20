import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterView } from 'oh-router-react'
import { router } from './routes'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import './assets/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <RouterView router={router} />
  </ConfigProvider>
  // </React.StrictMode>
)
