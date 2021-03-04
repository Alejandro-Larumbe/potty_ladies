import Router from 'express-promise-router'
import bcrypt from "bcryptjs"
import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const router = Router()

const app = express()
app.use(router)
app.use(express.json())

router.post("/", async (req, res) => {
  console.log('HIHIHIIH', req.body)
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    addressStreet1,
    addressStreet2,
    addressCity,
    addressRegion,
    addressZip
  } = req.body
  const bcryptHashedPw = await bcrypt.hash(password,10)
  const result = await prisma.user.create({
    // create must need data:{data here}
    data: {
      firstName,
      lastName,
      email,
      phone,
      hashedPassword:bcryptHashedPw,
      addressStreet1,
      addressStreet2,
      addressCity,
      addressRegion,
      addressZip
     },
  })
  result.hashedPassword = ''
  //delete hashedPassword and send the json to frontend.
  res.json(result)
})
///sign up/////////////////////
// {    "firstName":"peter",
//     "lastName":"kang",
//     "email":"peter5@peter.com",
//     "phone":123456,
//     "password":"123123",
//     "addressStreet1":"123123",
//     "addressStreet2":"123123",
//     "addressCity":"123123",
//     "addressRegion":"123123",
//     "addressZip":123123}

//Log in
router.post("/login", async (req, res, next) => {
  const {email, password} = req.body
  const user = await prisma.user.findUnique({
    where:{
      email:email
    }
  })

  if (!user) {
    // let err = new HttpException(401, 'Email does not exist', ['User not found'], 'User not found')

    // console.log(err)
    // next(err)
  }
})

//Get User's information
router.get("/:id(\\d+)", async (req, res) => {
  const userId = Number(req.params.id)
  const user = await prisma.user.findUnique({
    where:{
      id:userId
    }
  })
  // user.hashedPassword = ''
  res.json(user)
})

export default router
