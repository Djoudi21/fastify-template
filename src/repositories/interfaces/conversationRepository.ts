import { Conversation, ConversationRequestBody } from '../../use-cases/createConversationUseCase/types'
import { User } from '../../use-cases/registerUseCase/types'

export interface ConversationRepository {
  _conversations?: Conversation[]

  createConversation(newConversationWithUserIds: ConversationRequestBody): Promise<any>

  listConversationsByUserId(userId: User['id']): Promise<any>
}
