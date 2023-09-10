import { PrismaConversationRepository } from '../repositories/prismaConversationRepository'
import { CreateConversationUseCase } from '../use-cases/createConversationUseCase/createConversationUseCase'
import { ListConversationsByUserIdUseCase } from '../use-cases/listConversationsByUserIdUseCase/listConversationsByUserIdUseCase'

export class ConversationController {
  async createConversation(req: any, reply: any): Promise<any> {
    // TODO: handle req.body.data mapping
    const conversationRepository = new PrismaConversationRepository()
    const createConversationUseCase = new CreateConversationUseCase(conversationRepository)
    const response = await createConversationUseCase.execute(req.body.data)
    reply.send(response)
  }

  async listConversationsByUserId(req: any, reply: any): Promise<any> {
    // TODO: handle req.body.data mapping
    const userId = req.params.userId
    const conversationRepository = new PrismaConversationRepository()
    const listConversationUseCase = new ListConversationsByUserIdUseCase(conversationRepository)
    const response = await listConversationUseCase.execute(userId)
    reply.send(response)
  }
}
