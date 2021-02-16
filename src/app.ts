
// import dotenv from 'dotenv'
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
// const { ValidationError } = require('sequelize')
// const { environment, origin } = require('./config')

// Routes
const router = require('./routes/index.ts')
import { Request, Response, NextFunction } from 'express'
// const HttpException = require('./utils/HttpException')
import { HttpException } from './utils/HttpException'
const { environment } = require('../config/index')
// load the environment variables from the .env file
// dotenv.config({
//   path: '.env'
// })

const app = express()

app.use(morgan('dev'))
// app.use(cors({origin}))
app.use(cookieParser())
app.use(express.json()) // ???
app.use(express.urlencoded({ extended: false})) // ???
// app.use(static(path.join(__dirname, 'public')))

app.use(router)

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new HttpException(404, 'The requested resource couldn\'t be found.', ['The requested resource couldn\'t be found.'], 'The requested resource couldn\'t be found.')

  next(err)
});

// ERROR HANDLERS
// let error: InstanceType<typeof HttpException>; // no error

// app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
//   // if (err instanceof ValidationError) {
//     // err.errors = err.errors.map(e => e.message);
//     err.title = 'Sequelize Error';
//   // }
//   next(err);
// });

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';

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

module.exports = app

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
