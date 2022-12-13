import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterView } from 'oh-router-react'
import { router } from './routes'
import './assets/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterView router={router} />
  // </React.StrictMode>
)
