import { regularExps } from "../../../config"

export class LonginUserDto {

  private constructor(
    public readonly email: string,
    public readonly password: string
  ){}

  public static fromObject( obj: {[key: string]: any} ): [LonginUserDto?, string?] {

    const { email, password } = obj

    if ( !email ) return [ undefined, 'El email es obligatorio']
    if ( !regularExps.email.test(email) ) return [ undefined, 'El email no es válido']
    if ( !password ) return [undefined, 'El password es obligatorio']

    return [ new LonginUserDto(email, password), undefined ]
  } 


}