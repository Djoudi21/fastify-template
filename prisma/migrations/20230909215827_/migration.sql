/*
  Warnings:

  - The primary key for the `ConversationsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ConversationsOnUsers` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `ConversationsOnUsers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ConversationsOnUsers" DROP CONSTRAINT "ConversationsOnUsers_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ConversationsOnUsers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "conversationId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
