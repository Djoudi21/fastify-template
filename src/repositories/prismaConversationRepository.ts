import { PrismaClient } from '@prisma/client'
import { ConversationRepository } from './interfaces/conversationRepository'

const prisma = new PrismaClient()

export class PrismaConversationRepository implements ConversationRepository {
  async createConversation({ participants }: any): Promise<any> {
    return prisma.conversation.create({
      data: {
        participants: {
          connect: participants,
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
