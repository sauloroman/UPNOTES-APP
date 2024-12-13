import { prisma } from "../../data";

export class PeriodService {

  private async isPeriodInDataBase( numberPeriod: number ): Promise<boolean> {
    const possiblePeriod  = await prisma.period.findUnique({ where: { numberPeriod }})
    if ( !possiblePeriod ) return false
    return true
  }

  public async postPeriod( numberPeriod: number ): Promise<string | null> {
    if ( !this.isPeriodInDataBase(numberPeriod ) ) {
      const period = await prisma.period.create({ data: { numberPeriod: numberPeriod } })
      return period.id
    }
    return null
  }

} 