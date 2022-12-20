import { MockMethod } from 'vite-plugin-mock'
import { JWTMock } from './jwt.mock'
import { meMock } from './me.mock'
import { GamesMock } from './games.mock'
import { UsersMock } from './users.mock'

export default [JWTMock, meMock, GamesMock, UsersMock] as MockMethod[]
