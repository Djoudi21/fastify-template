import { MessageRepository } from './interfaces/MessageRepository'
import { Message } from '../use-cases/createMessageUseCase/types'

export class InMemoryMessageRepository implements MessageRepository {
  _messages: Message[] = []

  createMessage(): Promise<any> {
    const newMessage: Message = {
      text: 'new message',
      conversationId: 1,
      userId: 1,
    }
    this._messages.push(newMessage)
    const response = {}
    return Promise.resolve(response)
  }
}
