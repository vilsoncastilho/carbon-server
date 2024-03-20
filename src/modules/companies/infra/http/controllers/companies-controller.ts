import { Request, Response } from 'express'
import { GetOwnCompany } from '@/modules/companies/services/get-own-company-service'

class CompaniesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const userId = req.user.id

    const company = await GetOwnCompany.execute({ userId, companyId: id })

    return res.json(company);
  }
}

export const companiesController = new CompaniesController()
