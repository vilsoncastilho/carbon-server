import { Request, Response } from 'express'
import { CreateSession } from '@/modules/users/services/create-session-service'

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const { user, token } = await CreateSession.execute({
      email,
      password,
    })

    return res.json({ user, token })
  }
}

export const sessionsController = new SessionsController()
