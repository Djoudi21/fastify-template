/*
  Warnings:

  - You are about to drop the `_ConversationToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConversationToUser" DROP CONSTRAINT "_ConversationToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationToUser" DROP CONSTRAINT "_ConversationToUser_B_fkey";

-- DropTable
DROP TABLE "_ConversationToUser";

-- CreateTable
CREATE TABLE "ConversationsOnUsers" (
    "userId" INTEGER NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ConversationsOnUsers_pkey" PRIMARY KEY ("userId","conversationId")
);

-- AddForeignKey
ALTER TABLE "ConversationsOnUsers" ADD CONSTRAINT "ConversationsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationsOnUsers" ADD CONSTRAINT "ConversationsOnUsers_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
