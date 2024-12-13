import { PeriodsResponse } from '../entities/period';

export abstract class PeriodsRepository {
  abstract getAllPeriods(): Promise<PeriodsResponse>
}