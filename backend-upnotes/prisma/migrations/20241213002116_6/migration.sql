/*
  Warnings:

  - You are about to drop the column `endDate` on the `Period` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Period` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Period_numberPeriod_key";

-- AlterTable
ALTER TABLE "Period" DROP COLUMN "endDate",
DROP COLUMN "startDate";
