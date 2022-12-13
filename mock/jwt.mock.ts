import { MockMethod } from 'vite-plugin-mock'

export const JWTMock: MockMethod = {
  url: '/api/v1/login',
  method: 'post',
  response: (): Result<Login> => {
    return {
      code: 1,
      msg: '登录成功',
      resource: {
        token: 'Token',
      },
    }
  },
}
