
// import dotenv from 'dotenv';
import express from 'express';
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { ValidationError } = require('sequelize')
// const { environment, origin } = require('./config')

// Routes
const { router } = require('./routes/routes')

// load the environment variables from the .env file
// dotenv.config({
//   path: '.env'
// });

const app = express()

app.use(morgan('dev'))
app.use(cors({origin}))
app.use(cookieParser())
app.use(express.json()) // ???
app.use(express.urlencoded({ extended: false})) // ???
// app.use(static(path.join(__dirname, 'public')))

app.use(router)


// ERROR HANDLERS


module.exports = app

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
// class Server {
  // public app = express();
// }

// initialize server app
// const server = new Server();

// make server listen on some port
// ((port = process.env.APP_PORT || 5000) => {
//   server.app.listen(port, () => console.log(`> Listening on port ${port}`));
// })();