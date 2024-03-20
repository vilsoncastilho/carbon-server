import { User } from '@/modules/users/models/user.model'
import { ICompany, Company } from '@/modules/companies/models/company.model'
import { AppError } from '@/shared/errors/app-error'

interface IRequest {
  userId: string
  companyId: string
}

interface IResponse {
  company: ICompany
}

class GetOwnCompanyService {
  async execute({
    userId,
    companyId,
  }: IRequest): Promise<IResponse> {
    if (!userId || userId === '') throw new AppError('Not allowed!')

    const user = await User.findOne({_id: userId})

    if (!user) throw new AppError('User not fould!', 404)
    if (!user.company_ids.includes(companyId)) throw new AppError("You don't have permission!")

    const company = await Company.findOne({ _id: companyId })

    if (!company) throw new AppError('Company not fould!', 404)

    return { company }
  }
}

export const GetOwnCompany = new GetOwnCompanyService()
