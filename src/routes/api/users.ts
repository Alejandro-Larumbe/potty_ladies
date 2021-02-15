const router = require('express-promise-router')()
const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()

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



//Log in
router.post("/login", async (req, res, next) => {
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
})

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