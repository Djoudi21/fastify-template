import { beforeEach, describe, it } from 'vitest'
import { ConversationRepository } from '../repositories/interfaces/conversationRepository'
import { InMemoryConversationRepository } from '../repositories/inMemoryConversationRepository'
import { ListConversationsByUserIdUseCase } from '../use-cases/listConversationsByUserIdUseCase/listConversationsByUserIdUseCase'

describe('list conversation use case', () => {
  let conversationRepository: ConversationRepository
  let listConversationUseCase: ListConversationsByUserIdUseCase
  beforeEach(() => {
    conversationRepository = new InMemoryConversationRepository()
    listConversationUseCase = new ListConversationsByUserIdUseCase(conversationRepository)
  })
  it('should list all user conversations', async () => {
    // listConversationUseCase.execute()
    // const conversations = conversationRepository._conversations
    // const createdConversation = conversations[conversations.length - 1]
    //
    // expect(conversations).toHaveLength(1)
    // expect(createdConversation).toBeDefined()
    // expect(createdConversation.title).toBeDefined()
  })
})
