import { FastifyInstance } from 'fastify'

import { AuthController } from '../controllers/authControler'

const fastify = require('fastify')()
fastify.register(require('@fastify/jwt'), {
  secret: 'supersecret',
})

const controller = new AuthController()
const registerPath = '/register'
const loginPath = '/login'

export async function router(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: registerPath,
    handler: controller.register,
  })
  fastify.route({
    method: 'POST',
    url: loginPath,
    handler: controller.login,
  })
}
