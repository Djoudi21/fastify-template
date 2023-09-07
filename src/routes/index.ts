import { FastifyInstance } from 'fastify'

import {AuthController} from "../controllers/authControler";


const controller = new AuthController()
const registerPath = '/register'
const loginPath = '/login'

export async function router (fastify: FastifyInstance) {
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
