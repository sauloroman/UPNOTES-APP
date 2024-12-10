import { CustomError } from "../errors/custom.error"

export class UserEntity {

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public gender: string,
    public profile: string,
    public password: string,
    public isAccountVerified: boolean,
    public isActive: boolean,
  ){}

  private static sendErrorForStringTypes= (prop: string): CustomError => {
    throw CustomError.badRequest(`No existe ${prop}`)
  }

  public static fromObject( userObj: {[key: string]: any} ): UserEntity {

    const {
      id,
      name, 
      email, 
      gender,
      profile,
      isAccountVerified,
      isActive, 
      password
    } = userObj

    for( const [key, value] of Object.entries( userObj ) ) {
      if ( typeof key === 'string' && value === undefined ) {
        this.sendErrorForStringTypes( key )
      }
    }

    return new UserEntity( id, name, email, gender, profile, password, isAccountVerified, isActive )

  } 
}