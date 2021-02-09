const router = require('express-promise-router')()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.post("/", async (req, res) => {
  const result = await prisma.plantType.create({
    data: { 
      name: "Good plant"
     },
  })
  res.json(result)
})

router.get("/", (req, res) => {
  res.send("Hello World")
  // res.redirect("/")
})

module.exports = router