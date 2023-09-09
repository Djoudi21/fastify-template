import { Conversation } from '../../use-cases/createConversationUseCase/types'
import { User } from '../../use-cases/registerUseCase/types'

export interface ConversationRepository {
  _conversations?: Conversation[]

  createConversation(newConversation: Conversation): Promise<any>

  listConversations(userId: User['id']): Promise<any>
}
