import { Middleware, MiddlewareContext } from 'oh-router'
import { getToken } from '../utils/token'
import { router as r } from '../routes'

export class LoginAuthMiddleware extends Middleware {
  async handler(
    ctx: MiddlewareContext<{}>,
    next: () => Promise<any>
  ): Promise<void> {
    // 获取token
    const token = getToken()
    // 访问login页面时判断是否存在token，如果有则跳转到首页，反之跳转登录页
    if (ctx.to.pathname === '/login') {
      if (typeof token !== 'undefined') {
        r.navigate('/')
      } else {
        await next()
      }

      return
    }
    if (typeof token !== 'undefined') {
      await next()
    } else {
      r.navigate('/login')
    }
  }
}
