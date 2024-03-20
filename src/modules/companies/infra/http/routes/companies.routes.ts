import { Router } from 'express'
import { ensureAuthenticated } from '@/modules/users/infra/http/middlewares/ensure-authenticated'
import { companiesController } from '@/modules/companies/infra/http/controllers/companies-controller'

const usersRouter = Router()

usersRouter.get('/:id', ensureAuthenticated, companiesController.index)

export default usersRouter
