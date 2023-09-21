import { MessageRepository } from '../../repositories/interfaces/MessageRepository'
import { Conversation } from '../createConversationUseCase/types'
import { User } from '../registerUseCase/types'

export class CreateMessageUseCase {
  messageRepository: MessageRepository

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository
  }

  async execute(conversationId: Conversation['id'], message: string, userId: User['id']) {
    try {
      const response = await this.messageRepository.createMessage(conversationId, message, userId)

      return {
        status: 201,
        data: {
          response,
        },
      }
    } catch (error) {
      return {
        status: 400,
      }
    }
  }
}
