const router = require('express-promise-router')()
import { Request, Response, NextFunction } from 'express'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get("/:id(\\d+)/plants", async (req: Request, res: Response, next: NextFunction) => {
  const { id: plantId } = req.params;
  const result = await prisma.plantType.findMany({
    where: {
      plantId
    }
  })
  res.json(result)
})

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { name, plantId } = req.body;
  const result = await prisma.plantType.create({
    data: { 
      name,
      plantId
    }
  })
  res.json(result)
})

module.exports = router