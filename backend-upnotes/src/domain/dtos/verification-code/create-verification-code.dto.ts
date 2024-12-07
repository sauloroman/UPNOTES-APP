import { regularExps } from "../../../config"

export class CreateVerificationCodeDto {

  private constructor(
    public readonly email: string
  ) {}

  public static create( obj: {[key: string]: any}): [CreateVerificationCodeDto?, string?] {

    const { email } = obj

    if ( !email ) return [undefined, 'El email es obligatorio']
    if ( !regularExps.email.test(email) ) return [undefined, 'El email no es válido']

    return [ new CreateVerificationCodeDto(email), undefined ]

  } 

}