import Fastify, { FastifyInstance } from 'fastify'

const fastify: FastifyInstance = Fastify({
  logger: true,
})

fastify.get('/ping', async (request, reply) => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    fastify.log.info(`Server running at port :3000`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
