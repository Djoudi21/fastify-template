import { MessageRepository } from '../../repositories/interfaces/MessageRepository'

export class CreateMessageUseCase {
  messageRepository: MessageRepository

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository
  }
}
