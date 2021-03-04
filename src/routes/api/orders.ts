import Router from 'express-promise-router'
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router()
const prisma = new PrismaClient()

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.order.findMany()
  res.json(result)
})

export default router;
