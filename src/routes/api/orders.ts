import Router from 'express-promise-router'
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router()
const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response, _next: NextFunction) => {
  const {
    userId,
    total,
    dateTime,
    promoCodeId,
    addressStreet1,
    addressStreet2,
    addressCity,
    addressRegion,
    addressZip,
    status,
  } = req.body

  const result = await prisma.order.create({
    data: {
      userId,
      total,
      dateTime,
      promoCodeId,
      addressStreet1,
      addressStreet2,
      addressCity,
      addressRegion,
      addressZip,
      status,
    }
  })
  res.json(result)
})

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.order.findMany()
  res.json(result)
})

// seed apperas as payed, might change to 'finished' for consistency
router.get("/finished", async (req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.order.findMany({
    where: {
      status: 'payed'
    }
  })
  res.json(result)
})

router.get("/open", async (req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.order.findMany({
    where: {
      status: 'open'
    }
  })
  res.json(result)
})

router.get

export default router;
