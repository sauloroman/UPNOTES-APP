import { Periods } from "../entities/period";

export abstract class PeriodsRepository {
  abstract getAllPeriods(): Promise<Periods>
}