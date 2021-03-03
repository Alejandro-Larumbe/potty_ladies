const router = require('express-promise-router')()
import { Request, Response, NextFunction } from 'express'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get("/:id(\\d+)/plants", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await prisma.plants.findMany({
    where: {
      tags: { id }
    }
  })
  res.json(result)
})

module.exports = router