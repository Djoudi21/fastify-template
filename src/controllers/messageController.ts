import { ListMessagesByConversationIdUseCase } from '../use-cases/listMessagesByConversationIdUseCase/listMessagesByConversationIdUseCase'
import { PrismaMessageRepository } from '../repositories/prismaMessageRepository'
import { CreateMessageUseCase } from '../use-cases/createMessageUseCase/createMessageUseCase'

export class MessageController {
  async listMessagesByConversationId(req: any, reply: any): Promise<any> {
    const conversationId = req.params.conversationId
    const messageRepository = new PrismaMessageRepository()
    const listMessagesByConversationIdUseCase = new ListMessagesByConversationIdUseCase(messageRepository)
    const response = await listMessagesByConversationIdUseCase.execute(conversationId)
    reply.send(response)
  }

  async createMessage(req: any, reply: any): Promise<any> {
    const conversationId = req.params.conversationId
    const { text, userId } = req.body.data
    const messageRepository = new PrismaMessageRepository()
    const createMessageUseCase = new CreateMessageUseCase(messageRepository)
    const response = await createMessageUseCase.execute(conversationId, text, userId)
    reply.send(response)
  }
}
