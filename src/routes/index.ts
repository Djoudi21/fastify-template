import { FastifyInstance } from 'fastify'
import { AuthController } from '../controllers/authControler'
import { ConversationController } from '../controllers/conversationController'
import { MessageController } from '../controllers/messageController'

const authController = new AuthController()
const conversationController = new ConversationController()
const messageController = new MessageController()

const registerPath = '/register'
const loginPath = '/login'
const conversationPath = '/conversations'
const conversationByUserIdPath = '/users/:userId/conversations'
const messagesByConversationIdPath = '/conversations/:conversationId/messages'

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
    url: conversationByUserIdPath,
    handler: conversationController.listConversationsByUserId,
  })
  fastify.route({
    method: 'GET',
    url: messagesByConversationIdPath,
    handler: messageController.listMessagesByConversationId,
  })
  fastify.route({
    method: 'POST',
    url: messagesByConversationIdPath,
    handler: messageController.createMessage,
  })
}
