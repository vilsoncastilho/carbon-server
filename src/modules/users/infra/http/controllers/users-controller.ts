import { Request, Response } from 'express'

import { CreateAdminUser } from '@/modules/users/services/create-admin-user-service'
import { GetOwnUser } from '@/modules/users/services/get-own-user-service';

class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const user = await GetOwnUser.execute({ id: req.user.id })

    return res.json(user);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      companyName,
      companyIndustry,
    } = req.body;

    const user = await CreateAdminUser.execute({
      name,
      email,
      password,
      companyName,
      companyIndustry,
    });

    return res.status(201).json(user);
  }
}

export const usersController = new UsersController()
