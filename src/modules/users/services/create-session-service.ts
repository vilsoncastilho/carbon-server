import authConfig from '@/config/auth'
import { sign } from 'jsonwebtoken'
import { AppError } from '@/shared/errors/app-error'
import { BCryptHash } from '@/modules/users/providers/implementations/bcrypt-hash-provider'
import { User, IUser } from '@/modules/users/models/user.model'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: IUser
  token: string
}

class CreateSessionService {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await User.findOne({email})

    if (!user) throw new AppError('Incorrect e-mail/password combination.', 401)

    const matchedPassword = await BCryptHash.compareHash(
      password,
      user.password,
    );

    if (!matchedPassword) throw new AppError('Incorrect e-mail/password combination.', 401)

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      token,
    }
  }
}

export const CreateSession = new CreateSessionService()
