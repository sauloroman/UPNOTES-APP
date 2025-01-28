/*
  Warnings:

  - A unique constraint covering the columns `[numberPeriod]` on the table `Period` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Period_numberPeriod_key" ON "Period"("numberPeriod");
