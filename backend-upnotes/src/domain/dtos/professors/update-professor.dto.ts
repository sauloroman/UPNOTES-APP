import { regularExps } from "../../../config";

export class UpdateProfessorDto {

  private constructor(
    public readonly name?: string,
    public readonly email?: string,
    public readonly phone?: string,
  ) {}

  public static create( obj: {[key: string]: any} ): [ UpdateProfessorDto?, string? ] {

    const { name, email, phone } = obj

    if ( email ) {
      if ( !regularExps.email.test( email ) ) return [ undefined, "El email que intentas agregar no es valido"]
    }

    if ( phone ) {
      if ( phone.length !== 10 ) return [ undefined, "El teléfono debe tener 10 caracteres"]
    }

    return [ new UpdateProfessorDto(name, email, phone) ]
  }

}