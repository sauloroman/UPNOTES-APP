import { regularExps } from '../../../config/utils/regular-exp.util';

export class RegenerateVerificationCodeDto {

  private constructor(
    public readonly email: string
  ){}

  public static create( obj: {[key: string]: any}): [ RegenerateVerificationCodeDto?, string? ] {
    const { email } = obj

    if ( !email ) return [ undefined, 'El email es necesario para generar el código de verificación']
    if ( !regularExps.email.test(email) ) return [ undefined, 'El email no es válido']

    return [ new RegenerateVerificationCodeDto(email), undefined ]
  }

}