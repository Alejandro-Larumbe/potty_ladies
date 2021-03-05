import express from 'express'

import router from './routes/index';
import HttpException from './utils/HttpException';
import { Request, Response, NextFunction } from 'express';
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(router)

app.use((_req, _res, next) => {
  const err = new HttpException(404, 'The requested resource couldn\'t be found.', ['The requested resource couldn\'t be found.'], 'The requested resource couldn\'t be found.')
  next(err)
});
app.use((err: HttpException, _req:Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500);

  // is this right?
  const isProduction = process.env.NODE_ENV === 'production'
  // const isProduction = true

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
),)
