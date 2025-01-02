import { prisma } from '../../data';
import { CreateProfessorDto } from '../../domain/dtos/professors/create-professor.dto';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { ProfessorEntity } from '../../domain/entities/professor.entity';

export class ProfessorService {

  public async postProfessor( createProfessorDto: CreateProfessorDto, userId: string ): Promise<{professor: ProfessorEntity} | null> {
    const { name, email, phone } = createProfessorDto

    try {
      
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
      return null
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


}