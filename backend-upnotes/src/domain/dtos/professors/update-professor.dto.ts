export class UpdateProfessorDto {

  private constructor(
    public readonly name?: string,
    public readonly email?: string,
    public readonly phone?: string,
  ){}

  public static create( obj: {[key: string]: any} ): [UpdateProfessorDto?, string?]  {
    const { name, email, phone } = obj
    return [ new UpdateProfessorDto(name, email, phone) ]
  }

}