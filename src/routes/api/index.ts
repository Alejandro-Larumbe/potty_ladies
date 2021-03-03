import Router from 'express-promise-router'
const router = Router()
import users from './users';
import plants from './plants';


router.use('/users', users)
router.use('/plants', plants)



export default router
