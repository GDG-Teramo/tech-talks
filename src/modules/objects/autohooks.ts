import { FastifyInstance } from "fastify";
import { FakeObjectsStrategy } from "./strategy/objects.strategy.js";

declare module 'fastify' {
    interface FastifyRequest {
        user: {
            firstName: string;
            lastName: string;
        }
    }
}

export default async function(fastify: FastifyInstance) {
    fastify.decorate('objectsStrategy', new FakeObjectsStrategy())

    fastify.addHook('preHandler', async (req) => {
        req.user = {
            firstName: 'Giovanni',
            lastName: 'Di Donato'
        }
    })
}