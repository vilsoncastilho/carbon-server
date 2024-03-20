export interface Environment {
  port: number
  database_url: string
  jwt_secret_key: string
}

export function env(): Environment {
  return {
    port: Number(process.env.PORT),
    database_url: String(process.env.DATABASE_URL),
    jwt_secret_key: String(process.env.JWT_SECRET_KEY),
  }
}
