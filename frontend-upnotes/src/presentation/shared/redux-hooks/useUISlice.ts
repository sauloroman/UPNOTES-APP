import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store";
import { setIsMenuOverShown } from "../../../infrastructure/store/ui.slice";

export const useUISlice = () => {

  const dispatch = useDispatch();

  const { isMenuOverShown } = useSelector( (state: RootState) => state.ui )

  const openMenuOver = () => {
    dispatch( setIsMenuOverShown( true ) )
  }

  const closeMenuOver = () => {
    dispatch( setIsMenuOverShown( false ) )
  }

  return {
    openMenuOver,
    closeMenuOver,

    isMenuOverShown,
  }

}