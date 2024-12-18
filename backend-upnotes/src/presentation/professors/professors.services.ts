import { prisma } from '../../data';
import { CreateProfessorDto } from '../../domain/dtos/professors/create-professor.dto';
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

  public async getProfessorsByUser( userId: string ): Promise<{ professors: ProfessorEntity[] }> {
    const professors = await prisma.professor.findMany({ where: { userId }})
    const professorsEntity = professors.map( ProfessorEntity.fromObject )
    return {professors: professorsEntity}
  }


}