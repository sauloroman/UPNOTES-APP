import { Location, useLocation } from "react-router-dom"
import { capitalizeWord } from "../utils/capitalize-word";

type UseNavigation = {
  navigator: Location;
  getNamePage: () => string;
  getParams: () => ({ param: string, value: string });
}


export const useNavigationPage = (): UseNavigation => {

  const navigator = useLocation()

  const getNamePage = (): string => {
    const { pathname } = navigator
    const pageName = pathname.split('/')[2] || ''
    if ( !pageName ) return ''
    return capitalizeWord(pageName)
  }

  const getParams = (): { param: string, value: string }  => {
    const { search } = navigator
    const searchArr = search.split('=') 
    const param = searchArr[0].split('?')[1] 
    const value = searchArr[1]
    return { param: param ? capitalizeWord( param ) : '', value }
  }

  return {
    navigator,

    getNamePage,
    getParams
  }
}