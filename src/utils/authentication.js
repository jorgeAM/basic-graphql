import { verify } from '../lib/jwt'

export const getUser = ctx => {
  const authorization = ctx.req.get('Authorization')
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    return verify(token)
  }

  throw new Error('Not authenticated')
}