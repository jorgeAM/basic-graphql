import { getUser } from '../utils/authentication'

export const Query = {
  hello: () => 'Hola mundo!!',
  users: async (_, {}, ctx) => await ctx.models.user.find(),
  user: async (_, { id }, ctx) => await ctx.models.user.findById(id),
  me: async (_, {}, ctx) => {
    return getUser(ctx)
  }
}