export class ChangePasswordDto {

  private constructor(
    public readonly password: string
  ){}

  public static create( obj: {[key: string]: any}): [ChangePasswordDto?, string?] {
    const { password } = obj
    if ( !password ) return [ undefined, 'La contraseña nueva es requerida']
    return [ new ChangePasswordDto( password ), undefined ]
  }

}