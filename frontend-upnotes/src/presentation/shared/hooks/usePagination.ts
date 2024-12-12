import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { nextPage, prevPage } from "../../../infrastructure/store/slices/pagination.slice";

export const usePagination = () => {

  const dispatch = useDispatch();
  const { currentPage } = useSelector( (state: RootState) => state.pagination )

  const onNextPage = ( quantity: number = 1 ) => {
    dispatch( nextPage(quantity) )
  }

  const onPrevPage = ( quantity: number = 1 ) => {
    dispatch( prevPage(quantity) )
  }

  return {
    currentPage,

    onNextPage,
    onPrevPage
  }

}