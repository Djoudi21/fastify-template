import { ConversationRepository } from './interfaces/conversationRepository'
import { Conversation } from '../use-cases/createConversationUseCase/types'

export class InMemoryConversationRepository implements ConversationRepository {
  _conversations: Conversation[] = []

  createConversation(newConversation: Conversation): Promise<any> {
    this._conversations.push(newConversation)
    return Promise.resolve()
  }

  listConversations(): Promise<any> {
    return Promise.resolve()
  }
}
