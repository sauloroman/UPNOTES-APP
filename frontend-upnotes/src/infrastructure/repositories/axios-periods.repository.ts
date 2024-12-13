import { Periods } from "../../domain/entities/period";
import { PeriodsRepository } from "../../domain/repositories/periods.repository";
import { axiosInstanceProtected } from "../http/axiosInstance";

export class AxiosPeriodsRepository implements PeriodsRepository {

  async getAllPeriods(): Promise<Periods> {
    const { data } = await axiosInstanceProtected.get('/periods')
    return data
  }

}

export const axiosPeriodsRepository = new AxiosPeriodsRepository()