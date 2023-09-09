import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'
import { User } from '@prisma/client'

export class ListConversationUseCase {
  conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(userId: User['id']) {
    try {
      await this.conversationRepository.listConversations(userId)
    } catch (e) {}
  }
}
