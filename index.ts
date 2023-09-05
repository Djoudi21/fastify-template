import Fastify from 'fastify'
import {routes} from './src/routes'


const port = 3000
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify: import('fastify').FastifyInstance = Fastify({
    logger: true
})

fastify.register(routes)

fastify.listen({ port }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
