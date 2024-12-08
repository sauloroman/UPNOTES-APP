import { regularExps } from "../../../config"

enum GenderUser {
  M = "M",
  F = "F"
}

export class RegisterAccount {

  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly gender: GenderUser,
  ){}

  public static create( obj: {[key: string]: any} ): [ RegisterAccount?, string? ] {

    const { name, email, password, gender } = obj

    if ( !name ) return [ undefined, "El nombre del usuario es obligatorio" ]
    if ( !email || !regularExps.email.test( email ) ) return [ undefined, "El email no es válido"]
    if ( !password ) return [ undefined, "La contraseña es obligatoria"]
    if ( !gender ) return [ undefined, "El género es obligatorio"]

    return [ new RegisterAccount( name, email, password, gender ), undefined ]

  }


}