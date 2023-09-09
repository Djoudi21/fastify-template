import { PrismaClient, User } from '@prisma/client'
import { ConversationRepository } from './interfaces/conversationRepository'

const prisma = new PrismaClient()

export class PrismaConversationRepository implements ConversationRepository {
  async createConversation(newConversation: any): Promise<any> {
    return prisma.conversation.create({
      data: {
        title: newConversation.title,
      },
    })
  }

  async listConversations(userId: User['id']): Promise<any> {
    // const user = await prisma.user.findUnique({
    //   where: { id: userId },
    //   include: {
    //     conversations: {
    //       include: {
    //         messages: true, // If you want to include messages in each conversation
    //       },
    //     },
    //   },
    // })
    const conversations = await prisma.conversationsOnUsers.findMany({
      where: {
        createdBy: userId,
        user: {
          id: 1,
        },
      },
    })
    console.log('TOTOT', conversations)
  }
}
