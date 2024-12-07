import { useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"

export const useVerifyAccount = () => {

  const { isPending, message } = useSelector( (state: RootState) => state.verifyAccount )

  return {
    isPending,
    message
  }

}