import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'
import { ConversationRequestBody } from './types'

export class CreateConversationUseCase {
  private conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(newConversationWithUserIds: ConversationRequestBody) {
    try {
      await this.conversationRepository.createConversation(newConversationWithUserIds)
      return {
        status: 201,
      }
    } catch (e) {
      return {
        status: 400,
      }
    }
  }
}
