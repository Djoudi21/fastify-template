import Fastify from 'fastify'
import {router} from './src/routes'
import fastifyJwt from '@fastify/jwt'
// import Pusher from 'pusher'
//
// export const pusher = new Pusher({
//   appId: process.env.APP_ID,
//   key: process.env.API_KEY,
//   secret: process.env.SECRET,
//   cluster: process.env.CLUSTER,
//   useTLS: true,
// })
//
// export default async function handler(req, res) {
//   const { message, sender } = req.body
//   const response = await pusher.trigger('chat', 'chat-event', {
//     message,
//     sender,
//   })
//
//   res.json({ message: 'completed' })
// }

const port = 3000
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify: import('fastify').FastifyInstance = Fastify({
  logger: true,
})

fastify.register(router)
fastify.register(fastifyJwt, { secret: process.env.JWT_SECRET! })

fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
