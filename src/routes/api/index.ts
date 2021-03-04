import Router from 'express-promise-router'
const router = Router()
import users from './users';
import plants from './plants';
import types  from './types';
import tags  from './tags';

router.use('/users', users)
router.use('/plants', plants)
router.use('/types', types)
router.use('/tags', tags)

export default router
