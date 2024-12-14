import { CustomError } from "../errors/custom.error"

export class CourseEntity {

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly color: string,
    public readonly isFavorite: boolean,
    public readonly createdAt: Date,
    public readonly image: string,
    public readonly description: string,
    public readonly period: number,
    public readonly professor?: string,
  ){}

  private static sendErrorForStringTypes= (prop: string): CustomError => {
    throw CustomError.badRequest(`No existe ${prop}`)
  }

  private static sendErrorForNumberTypes = (prop: number): CustomError => {
    throw CustomError.badRequest(`${prop} debe ser positivo`)
  }

  public static fromObject( courseObj: {[key: string]: any} ): CourseEntity {

    const {
      id, _id,
      name,
      color,
      isFavorite,
      createdAt,
      image,
      description,
      period,
      professor
    } = courseObj

    for( const [key, value] of Object.entries( courseObj ) ) {
      if ( typeof key === 'string' && value === undefined ) {
        this.sendErrorForStringTypes( key )
      }
      if ( typeof key == 'number' ) {
        this.sendErrorForNumberTypes( key )
      }
    }

    const courseEntity = new CourseEntity(id, name, color, isFavorite, createdAt, image, description, period, professor )

    return courseEntity

  }

}