const router = require('express-promise-router')()
const api = require('./api/index.ts')

router.use('/api', api)

module.exports = router