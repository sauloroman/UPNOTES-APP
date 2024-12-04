import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),

  POSTGRESDB_USER: env.get('POSTGRESDB_USER').required().asString(),
  POSTGRESDB_PASSWORD: env.get('POSTGRESDB_PASSWORD').required().asString(),
  POSTGESDB_NAME: env.get('POSTGESDB_NAME').required().asString()
}