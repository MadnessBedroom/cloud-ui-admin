import { Router } from 'oh-router'
import { BaseLayout } from '../layouts/BaseLayout'
import { LoginAuthMiddleware } from '../middlewares/loginAuth'
import { GamesPage } from '../pages/games'
import { GameDetail } from '../pages/game-detail'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { NotFoundPage } from '../pages/404'
import { UsersPage } from '../pages/users'
import { SubjectsPage } from '../pages/subjects'
import { SystemPage } from '../pages/system'

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
          element: <GamesPage />,
        },
        {
          path: 'users',
          element: <UsersPage />,
        },
        {
          path: 'subjects',
          element: <SubjectsPage />,
        },
        {
          path: 'system',
          element: <SystemPage />,
        },
      ],
    },
    {
      path: '/game/:id',
      element: <GameDetail />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
})
