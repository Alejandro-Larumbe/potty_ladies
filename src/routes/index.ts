import Router from "express-promise-router";
const router = Router();

import api from './api/index'

router.use('/api', api)

export default router
