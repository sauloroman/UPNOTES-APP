import { prisma } from "../../data";

export class PeriodService {

  public async getPeriodByName( numberPeriod: number ): Promise<string | null> {
    const period = await prisma.period.findFirst({ where: { numberPeriod }})
    if ( !period ) return null
    return period.id
  }

} 