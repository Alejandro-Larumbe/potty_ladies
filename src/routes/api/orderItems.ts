import Router from 'express-promise-router'
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router()
const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response, _next: NextFunction) => {
  const {
    orderId,
    plantId,
    quantity,
  } = req.body

  const result = await prisma.orderItem.create({
    data: {
      orderId,
      plantId,
      quantity,
    }
  })
  res.json(result)
})

router.get("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id
  const result = await prisma.orderItem.findUnique({
    where: {
      id
    },
    // if you need only specific colums you can use:

    // select: {
    //   id: true,
    //   orderId: true,
    //   plantId: true,
    //   quantity: false,
    // }

  })
  res.json(result)
})

router.delete("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id
  const result = await prisma.orderItem.delete({
    where: {
      id
    }
  })
  res.json(result)
})

router.put("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id
  const {
    quantity
  } = req.body
  const result = await prisma.orderItem.update({
    where: {
      id
    },
    data: {
      quantity
    }
  })
  res.json(result)
})

router.get

export default router;
