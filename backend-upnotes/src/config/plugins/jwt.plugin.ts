import jwt from 'jsonwebtoken'
import { envs } from './envs.plugin';

const sessionDuration = envs.SESSION_DURATION
const secretKey = envs.JWT_KEY

export const jwtGenerator = {

  async generateToken( payload: any, duration: string = sessionDuration ): Promise<null | any> {
    return new Promise(( resolve, _ ) => {

      jwt.sign( payload, secretKey, { expiresIn: duration }, ( err, token ) => {
        if ( err ) {
          return resolve( null )
        }

        resolve( token )
      })

    })
  },

  async validateToken( token: string ): Promise<any | null> {
    return new Promise(( resolve, _) => {
      jwt.verify( token, secretKey, (err, decoded) => {
        if ( err ) return resolve( null )
        resolve( decoded )
      })
    })
  }

}