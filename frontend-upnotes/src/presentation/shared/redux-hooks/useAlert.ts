import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { clearAlert } from "../../../infrastructure/store/slices/alert.slice";

export const useAlert = () => {

  const dispatch = useDispatch();
  const { alert, isAlertShown } = useSelector((state: RootState) => state.alert)

  const onClearAlert = () => {
    dispatch( clearAlert() )
  }

  return {
    alert,
    isAlertShown,

    onClearAlert
  }

}