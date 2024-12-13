import { PeriodsRepository } from "../../../domain/repositories/periods.repository";

interface Options {
  periodsRepository: PeriodsRepository
}

export class GetAllPeriodsUseCase {

  private readonly periodsRepository: PeriodsRepository

  constructor({ periodsRepository }: Options) {
    this.periodsRepository = periodsRepository
  }

  public async apply() {
    return await this.periodsRepository.getAllPeriods()
  }

}