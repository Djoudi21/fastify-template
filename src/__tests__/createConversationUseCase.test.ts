import { beforeEach, describe, expect, it } from 'vitest'
import { CreateConversationUseCase } from '../use-cases/createConversationUseCase/createConversationUseCase'
import { ConversationRepository } from '../repositories/interfaces/conversationRepository'
import { InMemoryConversationRepository } from '../repositories/inMemoryConversationRepository'

describe('create conversation use case', () => {
  let conversationRepository: ConversationRepository
  let createConversationUseCase: CreateConversationUseCase
  beforeEach(() => {
    conversationRepository = new InMemoryConversationRepository()
    createConversationUseCase = new CreateConversationUseCase(conversationRepository)
  })
  it('should create a conversation', async () => {
    const newConversation = {
      title: 'conv 1',
    }

    conversationRepository._conversations?.push(newConversation)
    const conversations = conversationRepository._conversations
    const createdConversation = conversations[conversations.length - 1]

    expect(conversations).toHaveLength(1)
    expect(createdConversation).toBeDefined()
    expect(createdConversation.title).toBeDefined()
  })
})
