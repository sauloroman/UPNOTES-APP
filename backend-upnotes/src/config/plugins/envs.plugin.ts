import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),

  SESSION_DURATION: env.get('SESSION_DURATION').required().asString(),

  JWT_KEY: env.get('JWT_KEY').required().asString(),

  POSTGRESDB_USER: env.get('POSTGRESDB_USER').required().asString(),
  POSTGRESDB_PASSWORD: env.get('POSTGRESDB_PASSWORD').required().asString(),
  POSTGESDB_NAME: env.get('POSTGESDB_NAME').required().asString(),

  MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: env.get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
  SEND_EMAIL: env.get('SEND_EMAIL').required().asBool(),
}