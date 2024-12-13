import { prisma } from "./prisma-client"

(async () => {
  await populatePeriods();
})()

async function populatePeriods() {

  for( let i = 1; i <= 12; i++ ) {
    await prisma.period.create({ data: { numberPeriod: i }})
  }

  console.log('Periods created in Database')

}
