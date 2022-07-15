import "reflect-metadata";
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import {resolvers} from '../graphql/resolvers'

const prisma = new PrismaClient({
  log: ['info', 'error', 'query', 'warn']
})

const port = process.env.APP_PORT

async function main () {
  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: true
    }),
    context: () => ({prisma}),
    csrfPrevention:true,
    cache:"bounded",
  })

  try{
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
  }
  catch(err){
    console.log(err)
  }

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })