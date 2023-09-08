import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'
import { Conversation } from './types'

export class CreateConversationUseCase {
  private conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(newConversation: Conversation) {
    await this.conversationRepository.createConversation(newConversation)
  }
}
