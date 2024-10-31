import { loadEnvConfig } from '@next/env'
loadEnvConfig('./')

import cookieParser from 'cookie-parser'
import Express from 'express'
import Next from 'next'

import configs from '@/configs'
import { setupHealthCheck } from '@/server/libs/health_check'
import router from '@/server/router'

const dev = configs.NODE_ENV !== 'production'

const nextServer = Next({ dev, customServer: true })
const expressServer = Express()

const start = async () => {
    try {
        await nextServer.prepare()

        expressServer
            .use(Express.json())
            .use(Express.urlencoded({ extended: false }))
            .use(cookieParser())

        expressServer
            .use(configs.URL_PREFIX, router)
            .all('*', (req, res) => nextServer.getRequestHandler()(req, res))
        
        const serverListener = expressServer.listen(configs.NODE_PORT, () => {
            console.info(`Running on ${configs.APP_URL}`)
        })

        setupHealthCheck(serverListener)
    } catch (err) {
        console.error('Failed to start server', err)
    }
}

start()