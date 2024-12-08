import { regularExps } from "../../../config"

export class ValidateAccountDto {

  private constructor(
    public readonly code: string,
    public readonly email: string
  ){}

  public static create( obj: {[key: string]: any} ): [ ValidateAccountDto?, string? ] {

    const { code, email } = obj

    if ( !code ) return [undefined, 'El código de verificación es obligatorio']
    if ( !email ) return [undefined, 'El email es obligatorio']
    if ( !regularExps.email.test(email) ) return [undefined, 'El email no es válido']

    return [ new ValidateAccountDto(code, email), undefined ]
  }

}