import { IUser, User } from '@/modules/users/models/user.model'
import { AppError } from '@/shared/errors/app-error'

interface IRequest {
  id: string
}

interface IResponse {
  user: IUser
}

class GetOwnUserService {
  async execute({ id }: IRequest): Promise<IResponse> {
    if (!id || id === '') throw new AppError('Not allowed!')

    const user = await User.findOne({_id: id})

    if (!user) throw new AppError('User not fould!')

    return { user }
  }
}

export const GetOwnUser = new GetOwnUserService()
