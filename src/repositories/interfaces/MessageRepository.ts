import { Message } from '../../use-cases/createMessageUseCase/types'

export interface MessageRepository {
  _messages?: Message[]

  createMessage(): Promise<any>
}
