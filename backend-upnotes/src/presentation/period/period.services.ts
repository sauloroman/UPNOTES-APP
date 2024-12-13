import { prisma } from "../../data";

export class PeriodService {

  public async getPeriodByName( numberPeriod: number ): Promise<string | null> {
    const period = await prisma.period.findFirst({ where: { numberPeriod }})
    if ( !period ) return null
    return period.id
  }

  public async getPeriods(): Promise<{ periods: Number[] }> {
    const periods = await prisma.period.findMany()
    const numberPeriods = periods.map( period => period.numberPeriod )
    return {
      periods: numberPeriods
    }
  }
} 