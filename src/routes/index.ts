import { FastifyInstance } from 'fastify'
import { AuthController } from '../controllers/authControler'
import { ConversationController } from '../controllers/conversationController'

const authController = new AuthController()
const conversationController = new ConversationController()
const registerPath = '/register'
const loginPath = '/login'
const conversationPath = '/conversations'

export async function router(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: registerPath,
    handler: authController.register,
  })
  fastify.route({
    method: 'POST',
    url: loginPath,
    handler: authController.login,
  })
  fastify.route({
    method: 'POST',
    url: conversationPath,
    handler: conversationController.createConversation,
  })
  fastify.route({
    method: 'GET',
    url: conversationPath,
    handler: conversationController.listConversations,
  })
}
