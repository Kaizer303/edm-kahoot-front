import Express from 'express'

import observerController from '@/server/controllers/observer'
import analyticsController from '@/server/controllers/tn_analytics'
import authController from '@/server/controllers/auth'

const router = Express.Router()

router
    .get('/observer/new-relic/timer-header', observerController.observeNewRelic)
    .post('/tn-analytics', analyticsController.setBackendToken, analyticsController.getAwsCognitoToken)
    
    .get('/auth/tn', authController.authThinknet)

export default router