import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store";
import { setIsMenuAsideShown, setIsMenuOverShown } from "../../../infrastructure/store/ui.slice";

export const useUISlice = () => {

  const dispatch = useDispatch();

  const { isMenuOverShown, isMenuAsideShown } = useSelector( (state: RootState) => state.ui )

  const openMenuOver = () => {
    dispatch( setIsMenuOverShown( true ) )
  }

  const closeMenuOver = () => {
    dispatch( setIsMenuOverShown( false ) )
  }

  const openMenuAside = () => {
    dispatch( setIsMenuAsideShown( true ) )
  }

  const closeMenuAside = () => {
    dispatch( setIsMenuAsideShown( false ) )
  }

  return {
    openMenuOver,
    closeMenuOver,
    openMenuAside,
    closeMenuAside,

    isMenuOverShown,
    isMenuAsideShown,
  }

}