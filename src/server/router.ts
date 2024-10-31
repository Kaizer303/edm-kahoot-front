import Express from 'express'

import observerController from '@/server/controllers/observer'
import analyticsController from '@/server/controllers/tn_analytics'

const router = Express.Router()

router
    .get('/observer/new-relic/timer-header', observerController.observeNewRelic)
    .post('/tn-analytics', analyticsController.setBackendToken, analyticsController.getAwsCognitoToken)

export default router