export class CreateCourseDto {

  private constructor(
    public readonly name: string,
    public readonly color: string,
    public readonly period: number,
    public readonly categories: string[],
  ){}

  public static create(obj: {[key: string]: any}): [CreateCourseDto?, string?] {

    const { name, color, period, categories } = obj

    if (!name) return [ undefined, 'El nombre de la materia es obligatorio' ]
    if (!color) return [ undefined, 'El color de la materia es obligatorio' ]
    if (!period) return [ undefined, 'Se debe seleccionar un periodo']
    if ( categories.length === 0 ) return[ undefined, 'Se debe seleccionar al menos una categoria']

    return [new CreateCourseDto( name, color, period, categories ), undefined]
  }

} 