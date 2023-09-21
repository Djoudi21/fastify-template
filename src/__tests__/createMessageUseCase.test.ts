import { beforeEach, describe, it } from 'vitest'
import { MessageRepository } from '../repositories/interfaces/MessageRepository'
import { CreateMessageUseCase } from '../use-cases/createMessageUseCase/createMessageUseCase'
import { InMemoryMessageRepository } from '../repositories/inMemoryMessageRepository'
import { Message } from '../use-cases/createMessageUseCase/types'

describe('create message use case', () => {
  let messageRepository: MessageRepository
  let createMessageUseCase: CreateMessageUseCase
  beforeEach(() => {
    messageRepository = new InMemoryMessageRepository()
    createMessageUseCase = new CreateMessageUseCase(messageRepository)
  })
  it('should create a message', async () => {
    const newMessage: Message = {
      text: 'new message',
      conversationId: 1,
      userId: 1,
    }

    // const messages = messageRepository.messages
    // if (!messages) return
    //
    // expect(messages).toHaveLength(1)
  })
})
