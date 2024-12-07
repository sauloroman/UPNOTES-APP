export const axiosError = ( error: any ) => {
  let errorMessage = ''

  if ( error.response ) {
    errorMessage = error.response.data.error;
  } else {
    errorMessage = 'El servidor no responde. Intente de nuevo más tarde'
  }

  return errorMessage
}