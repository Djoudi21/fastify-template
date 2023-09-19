import { PrismaClient } from '@prisma/client'
import { MessageRepository } from './interfaces/MessageRepository'

const prisma = new PrismaClient()

export class PrismaMessageRepository implements MessageRepository {
  createMessage(): Promise<any> {
    return Promise.resolve(undefined)
  }

  async listMessagesByConversationId(conversationId: any): Promise<any> {
    return prisma.message.findMany({
      where: {
        conversation: {
          id: Number(conversationId),
        },
      },
    })
  }
}
