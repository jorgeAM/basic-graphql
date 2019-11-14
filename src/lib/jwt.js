import jwt from 'jsonwebtoken'
import debug from 'debug'

const logger = debug('graphql:lib:jwt')

export const sign = data => {
  const payload = {
    id: data.id,
    name: data.name,
    lastName: data.lastName,
    email: data.email
  }

  return jwt.sign(payload, process.env.SECRET)
}

export const verify = token => {
  try {
    return jwt.verify(token, process.env.SECRET)
  } catch(err) {
    throw new Error('Token inválido')
  }
}
