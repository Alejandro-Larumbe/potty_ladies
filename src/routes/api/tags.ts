const router = require('express-promise-router')()
import { Request, Response } from 'express'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body
  const result = await prisma.tag.create({
    data: {
      name
    }
  })
  res.json(result)
})

// Need to modify to only get plants with associated tag id.
// Currently, the below query fetches for all plans.
router.get("/:id(\\d+)/plants", async (req: Request, res: Response) => {
  const id = +req.params.id;
  const result = await prisma.plant.findMany({
    include: {
      tags: id
    }
  })
  res.json(result)
})

export default router