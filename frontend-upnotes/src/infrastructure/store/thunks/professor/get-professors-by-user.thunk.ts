import { GetProfessorsByUserUseCase } from "../../../../application/use-cases/professors/get-professors-by-user";
import { axiosProfessorsRepository } from "../../../repositories/axios-professors.repository";
import { setIsLoading } from "../../slices/loading.slice";
import { setProfessors } from "../../slices/user.slice";
import { AppThunk } from "../../store";

export const getProfessorByUserThunk = (): AppThunk => {
  return async ( dispatch ) => {

    dispatch( setIsLoading(true) )
    
    try {

      const { professors } = await new GetProfessorsByUserUseCase({ professorsRepository: axiosProfessorsRepository }).apply()
      
      dispatch( setProfessors(professors) )

    } catch (error) {
      console.log(error)
    }
    
    dispatch( setIsLoading(false) )
  }
}