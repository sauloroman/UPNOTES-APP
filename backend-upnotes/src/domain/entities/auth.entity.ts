import { CustomError } from "../errors/custom.error"

export class AuthEntity {

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public gender: string,
    public profile: any,
  ){}

  private static sendErrorForStringTypes= (prop: string): CustomError => {
    throw CustomError.badRequest(`No existe ${prop}`)
  }

  public static fromObject( userObj: {[key: string]: any} ): AuthEntity {

    const {
      id,
      name, 
      email, 
      gender,
      profile,
    } = userObj

    for( const [key, value] of Object.entries( userObj ) ) {
      if ( typeof key === 'string' && value === undefined ) {
        this.sendErrorForStringTypes( key )
      }
    }

    const authEntity = new AuthEntity( id, name, email, gender, profile) 

    return authEntity

  } 
}