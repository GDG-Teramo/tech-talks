import { FastifyInstance, FastifyRequest } from "fastify";

export default async function (fastify: FastifyInstance)  {
    fastify.get('/get', async(req: FastifyRequest) => {
        return req.user;
    })
} 