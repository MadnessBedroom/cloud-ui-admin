let isDev: boolean

type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [k: string]: JSONValue }
  | JSONValue[]

interface IUser {
  id: number
  username: string
  nickname: string
  avatar?: string
  created_at: string
  updated_at: string
}

type Login = {
  token: string
}

type Result<T> = {
  code: number
  msg: any
  resource: T
}

interface Resources<T> {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

interface Game {
  id: number
  title: string
  status: number
  people_num: number
  people_count: number
  level: number
  created_at: string
  updated_at: string
  deleted_at: string
}
