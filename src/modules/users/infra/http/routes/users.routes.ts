import { Router } from 'express'
import { usersController } from '@/modules/users/infra/http/controllers/users-controller'
import { ensureAuthenticated } from '@/modules/users/infra/http/middlewares/ensure-authenticated'

const usersRouter = Router()

usersRouter.get('/', ensureAuthenticated, usersController.index)

usersRouter.post('/', usersController.create)

export default usersRouter
