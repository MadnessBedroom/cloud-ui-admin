import { MockMethod } from "vite-plugin-mock"
import { faker } from '@faker-js/faker'

let id = 0
const genId = (): number => {
  id += 1
  return id
}

interface User {
  id: number
  username: string
  nickname: string
  password: string
  avatar: string
  status: number
  created_at: string
  updated_at: string
  game_ids: number[]
}

interface Resources<T> {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

const create = (attrs?: Partial<User>): User => {
  return {
    id: genId(),
    username: faker.internet.userName(),
    nickname: faker.name.fullName(),
    password: faker.internet.password(),
    status: 0,
    game_ids: [1, 2],
    avatar: faker.image.avatar(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
    ...attrs
  }
}

const createList = (n: number, attrs?: Partial<User>): User[] => {
  return Array.from({ length: n }).map(() => create(attrs))
}

const createResponse = ({ count = 10, perPage = 10, page = 1 }, attrs?: Partial<User>): Resources<User> => {
  const sendCount = (page - 1) * perPage
  const left = count - sendCount
  return {
    resources: left > 0 ? createList(Math.min(left, perPage), attrs) : [],
    pager: {
      page,
      per_page: perPage,
      count
    }
  }
}

export const UsersMock: MockMethod = {
  url: '/api/v1/users',
  method: 'get',
  statusCode: 200,
  response: ({ query }: ResponseParams): Resources<User> => createResponse({ count: 30, perPage: 10, page: parseInt(query.page) })
}