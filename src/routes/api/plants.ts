import Router from 'express-promise-router'
const router = Router()
import { PrismaClient } from '@prisma/client';

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

export default router;
