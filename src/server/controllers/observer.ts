import type { Request, Response } from 'express'

import { newrelic } from '@thinknet/observer'

const observeNewRelic = async (_: Request, res: Response) => {
    if (!newrelic.default.agent.collector.isConnected()) {
        await new Promise((resolve) => {
            newrelic.default.agent.on('connected', resolve)
        })
    }
    const script = newrelic.default.getBrowserTimingHeader({
        hasToRemoveScriptWrapper: true,
        allowTransactionlessInjection: true,
    })

    res.status(200).json({ script })
}

const controller = {
    observeNewRelic,
}

export default controller