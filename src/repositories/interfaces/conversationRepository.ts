import { Conversation } from '../../use-cases/createConversationUseCase/types'

export interface ConversationRepository {
  _conversations: Conversation[]

  createConversation(newConversation: Conversation): Promise<any>
}
