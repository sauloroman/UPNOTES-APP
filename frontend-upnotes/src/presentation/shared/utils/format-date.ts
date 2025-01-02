interface DateFormatter {
  convertToLocalTime: ( UTCDate: string, timeZone?: string ) => string
}

export const dateFormatter: DateFormatter = {

  convertToLocalTime( UTCDate: string, timeZone: string = 'America/Mexico_City' ): string {
    const date = new Date(UTCDate)

    const localTimeDate = new Intl.DateTimeFormat('es-MX', {
      timeZone,
      dateStyle: 'medium',
    }).format( date )

    return localTimeDate
  }

}