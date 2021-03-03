import Router from 'express-promise-router'
const router = Router()
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  const result = await prisma.plant.findMany()
  res.json(result)
})

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { 
    name,
    typeId,
    description,
    dimensions,
    price,
    stock,
    potSize
  } = req.body
  
  const result = await prisma.plant.create({
    data: {
      name,
      typeId,
      description,
      dimensions,
      price,
      stock,
      potSize
    }
  })
  res.json(result)
})

router.put("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { 
    name,
    typeId,
    description,
    dimensions,
    price,
    stock,
    potSize
  } = req.body

  const result = await prisma.plant.update({
    where: {
      id
    },
    data: {
      name,
      typeId,
      description,
      dimensions,
      price,
      stock,
      potSize
    }
  })
  res.json(result)
})

router.delete("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const result = await prisma.plant.delete({
    where: {
      id
    }
  })
  res.json(result)
})


router.get("/:id(\\d+)", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await prisma.plant.findUnique({
    where: {
      id
    }
  })
  res.json(result)
})

export default router;
