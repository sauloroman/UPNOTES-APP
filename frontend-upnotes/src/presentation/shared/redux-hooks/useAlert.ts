import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { clearAlert, setAlert } from "../../../infrastructure/store/slices/alert.slice";
import { AlertType } from "../../../application";

export const useAlert = () => {

  const dispatch = useDispatch();
  const { alert, isAlertShown } = useSelector((state: RootState) => state.alert)

  const onShowAlert = ( title: string, description: string ) => {
    const alert = {
      title,
      description,
      type: AlertType.warn
    }

    dispatch( setAlert({ alert, isAlertShown: true }))
  }

  const onClearAlert = () => {
    dispatch( clearAlert() )
  }

  return {
    alert,
    onShowAlert,
    isAlertShown,

    onClearAlert
  }

}