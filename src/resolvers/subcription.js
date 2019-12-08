export const Subscription = {
  newUser: {
    subscribe: (_, {}, ctx) => ctx.pubSub.asyncIterator(['NEW_USER'])    
  }
}