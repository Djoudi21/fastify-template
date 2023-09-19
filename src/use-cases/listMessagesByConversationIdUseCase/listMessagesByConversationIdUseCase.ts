import { Conversation } from '@prisma/client'
import { MessageRepository } from '../../repositories/interfaces/MessageRepository'

export class ListMessagesByConversationIdUseCase {
  messageRepository: MessageRepository

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository
  }

  async execute(conversationId: Conversation['id']) {
    try {
      const messages = await this.messageRepository.listMessagesByConversationId(conversationId)
      return {
        status: 200,
        data: {
          messages,
        },
      }
    } catch (e) {
      return {
        status: 400,
      }
    }
  }
}
