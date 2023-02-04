import { verify } from 'jsonwebtoken'

export default async function verifyToken(req, res, next) {
  console.log('Sou o middleware de verifyToken')
  return next()
}
