import Router from 'express-promise-router'
import users from './users';
import plants from './plants';
import types  from './types';
import tags  from './tags';
import orders from './orders';
import orderItems from './orderItems';

const router = Router()

router.use('/users', users)
router.use('/plants', plants)
router.use('/types', types)
router.use('/tags', tags)
router.use('/orders', orders)
router.use('/orderItems', orderItems)

export default router;
