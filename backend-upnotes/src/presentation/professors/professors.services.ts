import { prisma } from '../../data';
import { UpdateProfessorDto } from '../../domain/dtos';
import { CreateProfessorDto } from '../../domain/dtos/professors/create-professor.dto';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { ProfessorEntity } from '../../domain/entities/professor.entity';
import { CustomError } from '../../domain/errors/custom.error';

export class ProfessorService {

  private async isProfessorInDataBase( professorName: string, userId: string ) {
    const professor = await prisma.professor.findFirst({ where: { userId, name: professorName } })
    if ( !professor ) return false
    return true
  }

  public async postProfessor( createProfessorDto: CreateProfessorDto, userId: string ): Promise<{professor: ProfessorEntity} | null> {
    const { name, email, phone } = createProfessorDto

    try {

      if ( await this.isProfessorInDataBase(name, userId) ) 
        throw CustomError.badRequest(`El profesor ${name} ya existe`)
      
      const professorCreated = await prisma.professor.create({
        data: {
          userId: userId,
          email: email,
          name: name,
          phone: phone,
        }
      })
      
      const professorEntity = ProfessorEntity.fromObject( professorCreated )

      return { professor: professorEntity }

    } catch (error) {
      throw error
    }

  }

  public async getProfessorsByUser( 
    paginationDto: PaginationDto, 
    userId: string 
  ): Promise<any> {

    const { limit, page } = paginationDto

    const professors = await prisma.professor.findMany({ where: { userId }})
    const professorsEntity = professors.map( ProfessorEntity.fromObject )
    const finalProfessors = professorsEntity.slice( (page - 1) * limit, limit * page )
    const maxQuantityPages = Math.ceil( professorsEntity.length / limit )

    return {
      page: page,
      totalPages: maxQuantityPages,
      professorsInThisPage: finalProfessors.length,
      professors: finalProfessors
    }
  }

  public async deleteProfessorByUser( professorID: string ) {

    try {
      
      const professorDeleted = await prisma.professor.delete({ where: { id: professorID }})

      if ( !professorDeleted ) 
        throw CustomError.notFound('El profesor no existe')

      return {
        msg: 'El profesor ha sido eliminado exitosamente'
      }

    } catch (error) {
      throw error
    }

  }

  public async updateProfessorById( professorID: string, updateProfessorDto: UpdateProfessorDto ) {

    try {
      
      const updatedProfessor = await prisma.professor.update({ 
        where: { id: professorID} ,
        data: { ...updateProfessorDto } 
      })

      if ( !updateProfessorDto ) 
        throw CustomError.notFound('El profesor no existe')

      return {
        msg: `El profesor ${updatedProfessor.name} ha sido actualizado`
      }

    } catch (error) {
      throw error
    }

  }

}