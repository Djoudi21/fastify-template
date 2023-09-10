import { PrismaClient } from '@prisma/client'
import { ConversationRepository } from './interfaces/conversationRepository'

const prisma = new PrismaClient()

export class PrismaConversationRepository implements ConversationRepository {
  async createConversation({ userIds }: any): Promise<any> {
    return prisma.conversation.create({
      data: {
        participants: {
          connect: userIds,
        },
      },
    })
  }

  async listConversationsByUserId(userId: any): Promise<any> {
    return prisma.conversation.findMany({
      where: {
        participants: {
          some: {
            id: Number(userId),
          },
        },
      },
      include: {
        participants: true,
      },
    })
  }
}
