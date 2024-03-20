import { DB } from '@/shared/infra/database'

export interface ICompany {
  name: string
  industry: string
  created_at: Date
  updated_at: Date
}

const companySchema = new DB.mongoose.Schema<ICompany>({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
})

export const Company = DB.mongoose.model('companies', companySchema);
