import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'
import { User } from '@prisma/client'

export class ListConversationsByUserIdUseCase {
  conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(userId: User['id']) {
    try {
      const conversations = await this.conversationRepository.listConversationsByUserId(userId)
      console.log(conversations)

      const participantsWithoutPassword = conversations.map((conversation: any) => {
        const participants = conversation.participants.map(
          (participant: { id: number; email: string; password: string }) => {
            const { password, ...rest } = participant
            return rest
          },
        )
        return { ...conversation, participants }
      })

      return {
        status: 200,
        data: {
          conversations: participantsWithoutPassword,
        },
      }
    } catch (e) {
      return {
        status: 400,
      }
    }
  }
}
