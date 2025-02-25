import { regularExps } from "../../../config"

export class CreateProfessorDto {

  private constructor(
    public readonly name: string,
    public readonly email?: string,
    public readonly phone?: string,
  ){}

  public static create( obj: {[key: string]: any} ): [CreateProfessorDto?, string?]{

    const { name, email, phone } = obj

    if ( !name ) return [undefined, 'El nombre del profesor es obligatorio']

    if ( email ) {
      if ( !regularExps.email.test( email )) return [undefined, 'El email no es válido']  
    }

    return [ new CreateProfessorDto(name, email, phone), undefined ]

  }

}