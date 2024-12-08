import { regularExps } from "../../../config"

export class LonginAccountDto {

  private constructor(
    public readonly email: string,
    public readonly password: string
  ){}

  public static create( obj: {[key: string]: any} ): [LonginAccountDto?, string?] {

    const { email, password } = obj

    if ( !email ) return [ undefined, 'El email es obligatorio']
    if ( !regularExps.email.test(email) ) return [ undefined, 'El email no es válido']
    if ( !password ) return [undefined, 'El password es obligatorio']

    return [ new LonginAccountDto(email, password), undefined ]
  } 


}