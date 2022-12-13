import { MockMethod } from 'vite-plugin-mock'
import { faker } from '@faker-js/faker'

export const meMock: MockMethod = {
  url: '/api/v1/me',
  method: 'get',
  response: (): Result<User> => {
    return {
      code: 1,
      msg: '操作成功',
      resource: {
        id: 1,
        username: 'admin',
        nickname: '管理员',
        // avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        avatar: faker.image.avatar(),
        updated_at: '2022-12-10T00:00:00.000Z',
        created_at: '2022-12-10T00:00:00.000Z',
      },
    }
  },
}
