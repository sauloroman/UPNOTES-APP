import { useNavigate } from "react-router-dom"

export const useNavigation = () => {

  const navigate = useNavigate()

  const onGoPage = ( page: string ) => {
    navigate( page, {replace: true})
  }

  return {
    navigate,
    onGoPage,
  }

}