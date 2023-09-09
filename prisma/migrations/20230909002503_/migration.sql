/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `ConversationsOnUsers` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `ConversationsOnUsers` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `ConversationsOnUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConversationsOnUsers" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER NOT NULL;