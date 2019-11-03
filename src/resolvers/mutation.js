export const Mutation = {
  signUp: async (_, args, ctx) => {
    const { user: { name, lastName, email, password }} = args
    const user = await ctx.models.user.create({
      name,
      lastName,
      email,
      password
    }) 

    return user 
  }
}