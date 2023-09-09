import { PrismaConversationRepository } from '../repositories/prismaConversationRepository'
import { CreateConversationUseCase } from '../use-cases/createConversationUseCase/createConversationUseCase'
import { ListConversationUseCase } from '../use-cases/listConversationUseCase/listConversationUseCase'

export class ConversationController {
  async createConversation(req: any, reply: any): Promise<any> {
    const conversationRepository = new PrismaConversationRepository()
    const createConversationUseCase = new CreateConversationUseCase(conversationRepository)
    const response = await createConversationUseCase.execute(req.body.data)
    reply.send(response)
  }

  async listConversations(req: any, reply: any): Promise<any> {
    const conversationRepository = new PrismaConversationRepository()
    const listConversationUseCase = new ListConversationUseCase(conversationRepository)
    const response = await listConversationUseCase.execute(1)
    reply.send(response)
  }
}
