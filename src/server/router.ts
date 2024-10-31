import Express from 'express'

import authController from '@/server/controllers/auth'

const router = Express.Router()

router
    .get('/auth/tn', authController.authThinknet)
    .post('/auth/guest', authController.authGuest)

export default router