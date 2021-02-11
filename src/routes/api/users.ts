import { runInNewContext } from "vm"

const router = require('express-promise-router')()
const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()
const { generateToken, authenticated } = require('../../utils/auth')

//creating User
router.post("/", async (req, res) => {
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
  //destructure from req. body.
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
  delete result.hashedPassword
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

// interface Error {
//   status: number, title:string, errors:string[]
// }

//Log in
router.post("/token", authenticated, (async (req, res, next) => {
  const {email, password} = req.body
  const user = await prisma.user.findUnique({
    where:{
      email:email
    }
  })
  if (!user) {

    let err = new Error("Login Failed")
    err.message= "Email does not exist"
    // next(err)
    console.log(err.message)
  }

  const validatePassword = await bcrypt.compare(password, user.hashedPassword.toString())

    if (!validatePassword) {
      let err = new Error('invalid password')

      // err = Object.assign(err, {status: 401})
      // err = Object.assign(err, {title: 'invalid password'})
      // err = Object.assign(err, {errors: ['invalid password']})
      err.status = 401
      err.title = 'invalid password'
      err.errors = ['invalid password']
      // return next(err)
    }

    const token = generateToken(user)
    const id = user.id
    res.json({ token, id })

}))

// router.post('/token')


//Get User's information
router.get("/:id(\\d+)", async (req, res) => {
  const userId = Number(req.params.id)
  const user = await prisma.user.findUnique({
    where:{
      id:userId
    }
  })
  delete user.hashedPassword
  res.json(user)
})


module.exports = router
