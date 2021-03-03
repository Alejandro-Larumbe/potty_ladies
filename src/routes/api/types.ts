const router = require('express-promise-router')()
import { Request, Response, NextFunction } from 'express'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get("/:id(\\d+)/plants", async (_req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.plantType.findMany()
  res.json(result)
})

router.post("/:id(\\d+)/plants", async (req: Request, res: Response, next: NextFunction) => {
  const { name, plantId } = req.body;
  const result = await prisma.plantType.create({
    data: { 
      name,
      plantId
     }
  })
  res.json(result)
})