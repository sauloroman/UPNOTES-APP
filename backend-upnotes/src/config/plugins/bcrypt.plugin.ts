import { compareSync, genSaltSync, hashSync } from 'bcryptjs'

export const bcryptAdapter = {

  hash: ( password: string ) => {
    const salt = genSaltSync( 10 )
    return hashSync( password, salt )
  },

  compare( password: string, hashPassword: string ): boolean {
    return compareSync( password, hashPassword )
  }

}