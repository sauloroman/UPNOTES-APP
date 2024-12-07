import { CustomError } from "../errors/custom.error"

export class UserEntity {

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public gender: string,
    public password: string,
    public profile: string,
  ){}

  private static sendErrorForStringTypes= (prop: string): CustomError => {
    throw CustomError.badRequest(`No existe ${prop}`)
  }

  public static fromObject( userObj: {[key: string]: any} ): UserEntity {

    const {
      id,
      name, 
      email, 
      password,
      gender,
      profile
    } = userObj

    for( const [key, value] of Object.entries( userObj ) ) {
      if ( typeof key === 'string' && value === undefined ) {
        this.sendErrorForStringTypes( key )
      }
    }

    return new UserEntity( id, name, email, gender, password, profile )

  } 
}