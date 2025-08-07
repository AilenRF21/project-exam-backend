/*
  Warnings:

  - You are about to drop the column `debutYear` on the `Artist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Artist" DROP COLUMN "debutYear",
ADD COLUMN     "debut" TIMESTAMP(3);
