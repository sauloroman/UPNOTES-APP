import { useEffect, useState } from "react"
import { GetAllPeriodsUseCase } from "../../../application"
import { axiosPeriodsRepository } from "../../../infrastructure/repositories/axios-periods.repository"

export const usePeriods = () => {

  const [periods, setPeriods] = useState<number[]>()

  useEffect(() => {
    getAllPeriods()
  }, [])

  const getAllPeriods = async () => {
    try {
      const useCase = new GetAllPeriodsUseCase({ periodsRepository: axiosPeriodsRepository })
      const periods = await useCase.apply()
      setPeriods(periods.periods)
    } catch (error) {
      console.log(`${error}`)
    }
  }

  return {
    periods
  }

}