interface OnlyNumbers {
  onlyNumbers: ( value: number ) => string;
  randomNumber: ( startValue: number, endValue: number ) => number;
}

export const generateCode: OnlyNumbers = {

  onlyNumbers ( quantityOfNumbers: number ): string {
    let finalNumber = ''

    for( let i = 0; i <= quantityOfNumbers; i++ ) {
      const randomIndex = this.randomNumber(0, 9)
      finalNumber += randomIndex
    }

    return finalNumber
  },

  randomNumber( min: number, max: number ): number {
    return Math.random() * (max - min) + min; 
  }

}