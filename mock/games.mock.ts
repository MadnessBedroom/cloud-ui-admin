import { MockMethod } from 'vite-plugin-mock'
import { faker } from '@faker-js/faker'

interface Game {
  id: string
  title: string
  status: number
  people_num: number
  people_count: number
  level: number
  created_at: string
  updated_at: string
  deleted_at: string
}

type ResponseParams = {
  query: Record<string, string>
}

const gameTitles: string[] = [
  '私有云模拟赛',
  '公有云模拟赛',
  '云计算世赛',
  '云计算校赛',
  '云计算省赛',
  '云计算国赛',
]

interface Resources<T> {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

const create = (attrs?: Partial<Game>): Game => {
  return {
    id: faker.datatype.uuid(),
    title: gameTitles[Math.floor(Math.random() * gameTitles.length)],
    status: Math.floor(Math.random() * (3 - 0) + 0),
    people_num: Math.floor(Math.random() * (50 - 0) + 0),
    people_count: 50,
    level: Math.floor(Math.random() * (3 - 0) + 0),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
    deleted_at: faker.date.past().toISOString(),
    ...attrs,
  }
}

const createGames = (n: number, attrs?: Partial<Game>): Game[] => {
  return Array.from({ length: n }).map(() => create(attrs))
}

const createResponse = (
  { count = 10, perPage = 10, page = 1 },
  attrs?: Partial<Game>
): Resources<Game> => {
  const sendCount = (page - 1) * perPage
  const left = count - sendCount
  return {
    resources: left > 0 ? createGames(Math.min(left, perPage), attrs) : [],
    pager: {
      page,
      per_page: perPage,
      count,
    },
  }
}

export const GamesMock: MockMethod = {
  url: '/api/v1/games',
  method: 'get',
  statusCode: 200,
  response: ({ query }: ResponseParams): Resources<Game> => {
    return createResponse({
      count: 20,
      perPage: 10,
      page: parseInt(query.page),
    })
  },
}
