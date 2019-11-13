import bcrypt from 'bcrypt'

export const Mutation = {
  login: async (_, { email, password }, ctx) => {
    const user = await ctx.models.user.findOne({ email })
    if (!user) throw new Error('User does not exist!')
    const check = bcrypt.compareSync(password, user.password)
    if (!check) throw new Error('wrong password!')
    return user
  },
  signUp: async (_, args, ctx) => {
    const { user: { name, lastName, email, password }} = args
    const user = await ctx.models.user.create({
      name,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10)
    }) 

    return user 
  }
}