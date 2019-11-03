import cors from 'cors'
import 'graphql-import-node'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema.graphql'
import { resolvers } from './resolvers'

const PORT = process.env.PORT
const app = express()
const server = new ApolloServer({ typeDefs, resolvers, introspection: true })

app.use(cors())
server.applyMiddleware({ app })

app.listen(PORT, () => console.log(`server's running on port ${PORT} 🚀`))
