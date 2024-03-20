import { Router } from 'express';
import { sessionsController } from '@/modules/users/infra/http/controllers/sessions-controller';

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
