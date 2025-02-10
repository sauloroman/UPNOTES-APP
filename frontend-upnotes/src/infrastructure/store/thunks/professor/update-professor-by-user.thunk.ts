import { UpdateProfessorOfUser } from "../../../../domain/entities";
import { setIsLoading } from "../../slices/loading.slice";
import { AppThunk } from "../../store";

export const UpdateProfessorByUserThunk = ( updateProfessorByUser: UpdateProfessorOfUser ): AppThunk => {
  return async ( dispatch ) => {
    dispatch( setIsLoading(true) )

    try {
      


    } catch (error) {
      
    }

    dispatch( setIsLoading(false) )
  }
}