import mongoose from 'mongoose'
import { env } from '@/config/env'

class Mongo {
  public mongoose = mongoose

  async connect() {
    await this.mongoose.connect(env().database_url, {
      dbName: 'carbon_monitoring'
    }).then(() => {
      console.log('⚡ MongoDB is connected!')
    })
  }
}

export const DB = new Mongo()
