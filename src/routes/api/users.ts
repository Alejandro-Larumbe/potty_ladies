const router = require('express-promise-router')()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.post("/", async (req, res) => {
  const result = await prisma.user.create({
    data: { 
      firstName: "Hello",
      lastName: "World",
      email: "hello@world.com",
      phone: 1111111111,
      hashedPassword: "abc",
      addressStreet1: "address1",
      addressStreet2: "address2",
      addressCity: "city",
      addressRegion: "region",
      addressZip: 12345
     },
  })
  res.json(result)
})

router.get("/", (req, res) => {
  res.send("Hello World")
  // res.redirect("/")
})

module.exports = router