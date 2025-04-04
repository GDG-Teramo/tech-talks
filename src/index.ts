import fastify from 'fastify';
import autoload from '@fastify/autoload';
import { join } from 'desm';
import { ObjectsStrategy } from './modules/objects/strategy/objects.strategy.js';

declare module "fastify" {
    interface FastifyInstance {
        objectsStrategy: ObjectsStrategy;
    }
}

const makeFastify = () => {
    const app = fastify({ logger: true });
    app.listen({port: 3000})

    app.register(autoload, {
        dir: join(import.meta.url, "modules"),
        encapsulate: true,
        maxDepth: 1,
        autoHooks: true,
    })
}

makeFastify();