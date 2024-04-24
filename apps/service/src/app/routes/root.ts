import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    console.log('test');
    return { message: 'Hello API' };
  });
}
