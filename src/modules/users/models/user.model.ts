import { DB } from '@/shared/infra/database'

export interface IUser {
  _id: String
  name: string
  email: string
  password: string
  phone?: string
  role: string
  permissions: string[]
  company_ids: string[]
  created_at: Date
  updated_at: Date
}

const userSchema = new DB.mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  permissions: [String],
  company_ids: [String],
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
})

export const User = DB.mongoose.model('Users', userSchema);
