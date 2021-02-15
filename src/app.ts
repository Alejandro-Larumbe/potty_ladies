
// import dotenv from 'dotenv'
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
// const { ValidationError } = require('sequelize')
// const { environment, origin } = require('./config')

// Routes
const router = require('./routes/index.ts')
const { Request, Response, NextFunction } = require('express')
const HttpException = require('./utils/HttpException')
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

app.use((_req, _res, next) => {
  const err = new Error('The requested resource couldn\'t be found.')

  err.errors = ['The requested resource couldn\'t be found.']
  err.status = 404
  next(err)
});

// ERROR HANDLERS

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Sequelize Error';
  }
  next(err);
});

app.use((err, _req, res, _next) => {
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
