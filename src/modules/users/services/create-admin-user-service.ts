import { AppError } from '@/shared/errors/app-error'
import { Company } from '@/modules/companies/models/company.model'
import { IUser, User } from '@/modules/users/models/user.model'
import { BCryptHash } from '@/modules/users/providers/implementations/bcrypt-hash-provider'

interface IRequest {
  email: string
  password: string
  name: string
  companyName: string
  companyIndustry: string
}

interface IResponse {
  user: IUser
}

class CreateAdminUserService {
  async execute({
    name,
    email,
    password,
    companyName,
    companyIndustry,
  }: IRequest): Promise<IResponse> {
    if (!name || name === '') throw new AppError('User name is required!')
    if (!email || email === '') throw new AppError('E-mail is required!')
    if (!password || password === '') throw new AppError('Password is required!')
    if (!companyName || companyName === '') throw new AppError('The Company name is required!')
    if (!companyIndustry || companyIndustry === '') throw new AppError('The Company industry is required!')

    const foundCompany = await Company.findOne({ name: companyName })
    const foundUser = await User.findOne({email})

    if (foundCompany) throw new AppError('This company is already registered!')
    if (foundUser) throw new AppError('This user is already registered!')

    const company = await Company.create({
      name: companyName,
      industry: companyIndustry,
      created_at: new Date(),
      updated_at: new Date(),
    })

    const hashedPassword = await BCryptHash.generateHash(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone: null,
      role: 'ADMIN',
      permissions: ['all'],
      company_ids: [company._id],
      created_at: new Date(),
      updated_at: new Date(),
    })

    return { user }
  }
}

export const CreateAdminUser = new CreateAdminUserService()
