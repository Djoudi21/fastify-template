import { PrismaClient } from '@prisma/client'
import { MessageRepository } from './interfaces/MessageRepository'
import { User } from '../use-cases/registerUseCase/types'

const prisma = new PrismaClient()

export class PrismaMessageRepository implements MessageRepository {
  listMessagesByConversationId(conversationId: any): Promise<any> {
    try {
      return prisma.message.findMany({
        where: {
          conversation: {
            id: Number(conversationId),
          },
        },
      })
    } catch (error) {
      throw new Error()
    }
  }

  createMessage(conversationId: any, message: string, userId: User['id']): Promise<any> {
    try {
      return prisma.message.create({
        data: {
          text: message,
          sender: { connect: { id: userId } }, // Provide the user relation
          conversation: { connect: { id: Number(conversationId) } }, // Provide the conversation relation
        },
      })
    } catch (error) {
      throw new Error()
    }
  }
}
