import autoload from "@fastify/autoload";
import { join } from "desm";
import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { FakeObjectsStrategy } from "./strategy/objects.strategy.js";

async function objects(fastify: FastifyInstance, opts: {
    prefix: string
}) {
  fastify.register(autoload, {
    dir: join(import.meta.url, "routes"),
    // autoHooks: true,
    options: {
      prefix: opts.prefix,
    },
  });
}

export default fp(objects);