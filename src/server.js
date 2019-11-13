import cors from 'cors'
import 'graphql-import-node'
import express from 'express'
import chalk from 'chalk'
import debug from 'debug'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema.graphql'
import { resolvers } from './resolvers'
import { models } from './models'
import { connectToMongo } from './lib/mongo'

const logger = debug('graphql:server')
const PORT = process.env.PORT
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: async ({ req }) => {
    return {
      req,
      models
    }
  }
})

app.use(cors())
server.applyMiddleware({ app })

app.listen(PORT, () => {
  logger(chalk.bold.greenBright(`server's running on port ${PORT} 🚀`))
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(() => {
    logger(chalk.bold.red(`we can not connect to mongo`))
    process.exit(1)
  })
})
