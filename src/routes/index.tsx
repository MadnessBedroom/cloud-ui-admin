import { Router } from 'oh-router'
import { BaseLayout } from '../layouts/BaseLayout'
import { GamesPage } from '../pages/GamesPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { UsersPage } from '../pages/UsersPage'
import { SubjectsPage } from '../pages/SubjectsPage'
import { SystemPage } from '../pages/SystemPage'
import { Middleware, MiddlewareContext } from 'oh-router'
import { getToken } from '../utils/token'
class LoginAuthMiddleware extends Middleware {
  async handler(
    ctx: MiddlewareContext<{}>,
    next: () => Promise<any>
  ): Promise<void> {
    // 获取token
    const token = getToken()
    // 访问login页面时判断是否存在token，如果有则跳转到首页，反之跳转登录页
    if (ctx.to.pathname === '/login') {
      if (typeof token !== 'undefined') {
        router.navigate('/')
      } else {
        await next()
      }

      return
    }
    if (typeof token !== 'undefined') {
      await next()
    } else {
      router.navigate('/login')
    }
  }
}

export const router = new Router({
  middlewares: [new LoginAuthMiddleware()],
  routes: [
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <BaseLayout />,
      redirect: '/home',
      children: [
        {
          path: 'home',
          element: <HomePage />,
        },
        {
          path: 'games',
          name: '比赛管理',
          element: <GamesPage />,
        },
        {
          path: 'users',
          name: '选手管理',
          element: <UsersPage />,
        },
        {
          path: 'subjects',
          name: '赛题管理',
          element: <SubjectsPage />,
        },
        {
          path: 'system',
          name: '系统设置',
          element: <SystemPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
})
