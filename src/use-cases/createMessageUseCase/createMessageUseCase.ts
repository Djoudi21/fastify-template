import { MessageRepository } from '../../repositories/interfaces/MessageRepository'
import { Conversation } from '../createConversationUseCase/types'
import { User } from '../registerUseCase/types'
import Pusher from 'pusher'

export class CreateMessageUseCase {
  messageRepository: MessageRepository

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository
  }

  async execute(conversationId: Conversation['id'], message: string, userId: User['id']) {
    const pusher = new Pusher({
      appId: '1667432',
      key: '7e86efefa721402f7275',
      secret: 'a225f6059f0add14c23c',
      cluster: 'eu',
      encrypted: true, // Enable encryption for secure communication
    })
    try {
      const response = await this.messageRepository.createMessage(conversationId, message, userId)
      await pusher.trigger('my-channel', 'my-event', {
        message: response,
      })

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
