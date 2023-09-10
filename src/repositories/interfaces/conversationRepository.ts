import { Conversation } from '../../use-cases/createConversationUseCase/types'

export interface ConversationRepository {
  _conversations?: Conversation[]

  createConversation(newConversationWithUserIds: any): Promise<any>

  listConversationsByUserId(userId: any): Promise<any>
}
