import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store";
import { closeModal, ModalNames, openModal } from "../../../infrastructure/store/slices/modal.slice";

export const useModal = () => {

  const dispatch = useDispatch();

  const { isOpen, name } = useSelector( (state: RootState) => state.modal )

  const onCloseModal = () => {
    dispatch( closeModal() )
  }

  const onOpenModal = ( name: ModalNames ) => {
    dispatch( openModal({ name }) )
  }

  return {
    isOpen,
    name,

    onOpenModal,
    onCloseModal,
  }

}