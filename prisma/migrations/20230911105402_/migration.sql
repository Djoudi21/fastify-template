/*
  Warnings:

  - Added the required column `userId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "user_fk" FOREIGN KEY ("conversationId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
