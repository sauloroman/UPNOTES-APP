import { useLocation } from "react-router-dom"

export const useNavigationPage = () => {

  const navigation = useLocation()

  const getNamePage = (): string => {
    const { pathname } = navigation
    const pageName = pathname.split('/')[2]
    return pageName.replace( pageName[0], pageName[0].toUpperCase() )
  }

  return {
    navigation,

    getNamePage
  }
}