import { PrismaClient, User } from '@prisma/client'
import { ConversationRepository } from './interfaces/conversationRepository'
import { ConversationRequestBody } from '../use-cases/createConversationUseCase/types'

const prisma = new PrismaClient()

export class PrismaConversationRepository implements ConversationRepository {
  async createConversation({ title, userIds }: ConversationRequestBody): Promise<any> {
    // Step 1: Create the Conversation
    const conversation = await prisma.conversation.create({
      data: {
        title,
      },
    })

    // Step 2: Add Users to the Conversation
    for (const userId of userIds) {
      await prisma.conversationsOnUsers.create({
        data: {
          userId,
          conversationId: conversation.id,
        },
      })
    }
  }

  async listConversationsByUserId(userId: User['id']): Promise<any> {
    return prisma.conversationsOnUsers.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        conversation: true,
      },
    })
  }
}
