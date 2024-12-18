import { CustomError } from "../errors/custom.error"

export class ProfessorEntity {

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email?: string,
    public readonly phone?: string,
  ){}

  private static sendErrorForStringTypes= (prop: string): CustomError => {
    throw CustomError.badRequest(`No existe ${prop}`)
  }
  
  public static fromObject( professorObj: {[key: string]: any} ): ProfessorEntity {

    const { id, name, email, phone } = professorObj

    for( const [key, value] of Object.entries( professorObj ) ) {
      if ( typeof key === 'string' && value === undefined ) {
        this.sendErrorForStringTypes( key )
      }
    }

    return new ProfessorEntity( id, name, email, phone )
  }

}