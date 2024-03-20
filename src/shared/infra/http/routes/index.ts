import { Router } from 'express'
import usersRouter from '@/modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@/modules/users/infra/http/routes/sessions.routes'
import companiesRouter from '@/modules/companies/infra/http/routes/companies.routes'

const router = Router()

router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)

router.use('/companies', companiesRouter)

export default router
