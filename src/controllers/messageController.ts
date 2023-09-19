import { ListMessagesByConversationIdUseCase } from '../use-cases/listMessagesByConversationIdUseCase/listMessagesByConversationIdUseCase'
import { PrismaMessageRepository } from '../repositories/prismaMessageRepository'

export class MessageController {
  async listMessagesByConversationId(req: any, reply: any): Promise<any> {
    const conversationId = req.params.conversationId
    const messageRepository = new PrismaMessageRepository()
    const listMessagesByConversationIdUseCase = new ListMessagesByConversationIdUseCase(messageRepository)
    const response = await listMessagesByConversationIdUseCase.execute(conversationId)
    reply.send(response)
  }
}
