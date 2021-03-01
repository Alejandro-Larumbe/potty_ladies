import { PrismaClient } from '@prisma/client'
import * as bodyParser from 'body-parser'
import express from 'express'

import router from './routes/index';
import HttpException from './utils/HttpException';
import { Request, Response, NextFunction } from 'express';
const port = process.env.PORT

const prisma = new PrismaClient()
const app = express()

app.use(router)

app.use((req, res, next) => {
  const err = new HttpException(404, 'The requested resource couldn\'t be found.', ['The requested resource couldn\'t be found.'], 'The requested resource couldn\'t be found.')

  next(err)
});
app.use((err: HttpException, req:Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  // const isProduction = environment === 'production';
  const isProduction = true

  const errorData = {
    title: err.title || 'Server Error',
    message: err.message,
    stack: isProduction ? null : err.stack,
    errors: err.errors
  };

  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }

  console.error(errorData);
  res.json(errorData);
});

const server = app.listen(port, () =>
console.log(
  `🚀 Server ready at: http://localhost:${port}\n⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`,
),
)
