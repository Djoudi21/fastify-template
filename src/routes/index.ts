import { FastifyInstance } from 'fastify'

import {AuthController} from "../controllers/authControler";


const controller = new AuthController()
const registerPath = '/register'

export async function router (fastify: FastifyInstance) {
    fastify.route({
        method: 'POST',
        url: registerPath,
        handler: controller.register,
    })
}
