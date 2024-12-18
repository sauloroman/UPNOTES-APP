import { CreateProfessorUseCase } from "../../../../application/use-cases/professors/create-professor";
import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user";
import { CreateProfessor } from "../../../../domain/entities/professor";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setIsLoading } from "../../slices/loading.slice";
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const CreateProfessorThunk = ( createProfessor: CreateProfessor ): AppThunk => {
  return async ( dispatch ) => {

    dispatch( setIsLoading( true ) )

    try {

      const useCase = new CreateProfessorUseCase({ professorsRepository: axiosProfessorsRepository })
      await useCase.apply(createProfessor)

      const { professors } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply()

      dispatch( setProfessors(professors) )

    } catch (error) {
      console.log(error)
    }

    dispatch( setIsLoading( false ) )

  }
}