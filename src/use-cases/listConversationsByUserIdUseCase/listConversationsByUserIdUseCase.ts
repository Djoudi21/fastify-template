import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'
import { User } from '@prisma/client'

export class ListConversationsByUserIdUseCase {
  conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(userId: User['id']) {
    try {
      return {
        status: 200,
        data: {
          conversations: await this.conversationRepository.listConversationsByUserId(userId),
        },
      }
    } catch (e) {
      return {
        status: 400,
      }
    }
  }
}
