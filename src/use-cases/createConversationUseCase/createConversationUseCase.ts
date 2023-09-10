import { ConversationRepository } from '../../repositories/interfaces/conversationRepository'

export class CreateConversationUseCase {
  private conversationRepository: ConversationRepository

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository
  }

  async execute(newConversationWithUserIds: any) {
    try {
      const conversation = await this.conversationRepository.createConversation(newConversationWithUserIds)

      return {
        status: 201,
        data: {
          conversation,
        },
      }
    } catch (e) {
      return {
        status: 400,
      }
    }
  }
}
