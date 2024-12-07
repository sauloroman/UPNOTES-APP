import { useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store";

export const useLoading = () => {

  const { isLoading } = useSelector( (state: RootState) => state.loading )

  return {
    isLoading
  }

}