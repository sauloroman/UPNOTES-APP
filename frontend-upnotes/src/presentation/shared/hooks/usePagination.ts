import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../infrastructure/store/store"
import { nextPage, prevPage, setCurrentPage } from "../../../infrastructure/store/slices/pagination.slice";

export const usePagination = ( name: string ) => {

  const dispatch = useDispatch();
  const { currentPage, totalOfPages } = useSelector( (state: RootState | any) => state.pagination[name] )

  const onNextPage = ( quantity: number = 1 ) => {
    const nextPageNum = currentPage + quantity

    if ( nextPageNum <= totalOfPages ) {
      dispatch( nextPage({ name, quantity }) )
    }
  }

  const onPrevPage = ( quantity: number = 1 ) => {
    if ( currentPage > 1 ) {
      dispatch( prevPage({name, quantity}) )
    }
  }

  const setCurrentPageAc = ( page: number ) => {
    dispatch( setCurrentPage({name, currentPage: page}) )
  }

  return {
    currentPage,
    totalOfPages,

    onNextPage,
    onPrevPage,
    setCurrentPageAc
  }

}