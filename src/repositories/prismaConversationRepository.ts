import { PrismaClient } from '@prisma/client'
import { ConversationRepository } from './interfaces/conversationRepository'

const prisma = new PrismaClient()

export class PrismaConversationRepository implements ConversationRepository {
  createConversation({ participants }: any): Promise<any> {
    try {
      return prisma.conversation.create({
        data: {
          participants: {
            connect: participants,
          },
        },
      })
    } catch (error) {
      throw new Error()
    }
  }

  listConversationsByUserId(userId: any): Promise<any> {
    try {
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
    } catch (error) {
      throw new Error()
    }
  }
}
