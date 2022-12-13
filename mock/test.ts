import { MockMethod } from 'vite-plugin-mock'
import { JWTMock } from './jwt.mock'
import { meMock } from './me.mock'
import { GamesMock } from './games.mock'

export default [JWTMock, meMock, GamesMock] as MockMethod[]
