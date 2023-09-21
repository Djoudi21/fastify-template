import { User } from '../../use-cases/registerUseCase/types'

export interface MessageRepository {
  listMessagesByConversationId(conversationId: any): Promise<any>

  createMessage(conversationId: any, message: string, userId: User['id']): Promise<any>
}
