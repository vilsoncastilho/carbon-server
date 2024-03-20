import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'

import express from 'express'
import router from '@/shared/infra/http/routes'

import { globalExceptionHandler } from '@/shared/infra/http/middlewares/global-exception-handler'
import { DB } from '@/shared/infra/database'
import { env } from '@/config/env'

export class Server {
  public app = express()

  constructor() {
    this.setConfigurations()
    this.setRoutes()
    this.setErrorHandlers()
    this.setConnections()
  }

  async start() {
    await this.setConnections()
  }

  async setConfigurations() {
    this.app.use(express.json())
  }

  async setRoutes() {
    this.app.use(router)
  }

  async setErrorHandlers() {
    this.app.use(globalExceptionHandler)
  }

  async setConnections() {
    await DB.connect()

    this.app.listen(env().port, () => {
      console.log(`🚀 Server started on port ${env().port}!`)
    })
  }
}
