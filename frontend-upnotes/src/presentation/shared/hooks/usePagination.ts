import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { nextPage, prevPage, setCurrentPage } from "../../../infrastructure/store/slices/pagination.slice";

export const usePagination = () => {

  const dispatch = useDispatch();
  const { currentPage, totalOfPages } = useSelector( (state: RootState) => state.pagination )

  const onNextPage = ( quantity: number = 1 ) => {
    const nextPageNum = currentPage + quantity

    if ( nextPageNum <= totalOfPages ) {
      dispatch( nextPage(quantity) )
    }
  }

  const onPrevPage = ( quantity: number = 1 ) => {
    if ( currentPage > 1 ) {
      dispatch( prevPage(quantity) )
    }
  }

  const setCurrentPageAc = ( page: number ) => {
    dispatch( setCurrentPage(page) )
  }

  return {
    currentPage,
    totalOfPages,

    onNextPage,
    onPrevPage,
    setCurrentPageAc
  }

}