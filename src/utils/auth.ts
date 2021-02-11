import { userInfo } from "os"

const bearerToken = require('express-bearer-token')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const { secret, expiresIn } = require('../../config/index')

interface TokenUser {
  id: number,
  email: string,
}

function generateToken(user: TokenUser ) {
  const data = {
    id: user.id,
    email: user.email
  }
  const token = jwt.sign({ data }, secret, { expiresIn: +expiresIn})
  return token
}

function restoreUser(req, res: any, next) {
  const { token } = req

  if(!token) {
    return next({ status: 401, message: 'no token' })
  }

  return jwt.verify(token, secret, null, async(err: { status: number, message: string }, jwtPayload: { data : { id: number }}) => {
    if (err) {
      err.status = 402;
      return next(err)
    }

    const { id } = jwtPayload.data

    try {
      req.user = await prisma.user.findUnique({
        where: {
          id,
        }
      })
    } catch (e) {
      return next(e)
    }

    if(!req.user) {
      return next({ statue: 404, message: 'user not found'})
    }

  })
}

const authenticated = [bearerToken(), restoreUser]

module.exports = { generateToken, authenticated}
