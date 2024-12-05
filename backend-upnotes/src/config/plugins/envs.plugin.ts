import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),

  SESSION_DURATION: env.get('SESSION_DURATION').required().asString(),

  JWT_KEY: env.get('JWT_KEY').required().asString(),

  POSTGRESDB_USER: env.get('POSTGRESDB_USER').required().asString(),
  POSTGRESDB_PASSWORD: env.get('POSTGRESDB_PASSWORD').required().asString(),
  POSTGESDB_NAME: env.get('POSTGESDB_NAME').required().asString()
}