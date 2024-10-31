import type { Server } from 'node:http'

import configs from '@/configs'
import { createTerminus, HealthCheckError } from '@godaddy/terminus'

const isReady = () => Promise.resolve(true)

const startup = async () => {
    const isHttpReady = await isReady()

    const baseResponse = {
        connection: {
            HTTPServer: isHttpReady
        },
        timestamp: Date.now(),
        uptime: process.uptime()
    }

    if (!isHttpReady) {
        console.error(baseResponse, '[Healthcheck] Startz check is failed:')
        throw new HealthCheckError('Startup check is failed', baseResponse)
    }
    return baseResponse
}

const readiness = async () => {
    const isHttpReady = await isReady()

    const isEverythingReady = isHttpReady

    const baseResponse = {
        connection: {
            HTTPServer: isHttpReady
        },
        timestamp: Date.now(),
        uptime: process.uptime()
    }

    if (!isEverythingReady) {
        console.error(
            `[Healthcheck] Readiness check is failed: ${JSON.stringify(baseResponse)}`
        )
        throw new HealthCheckError('Readiness check is failed', baseResponse)
    }

    return baseResponse
}

const liveness = async () => {
    const isHttpReady = await isReady()

    const isEverythingReady = isHttpReady

    const baseResponse = {
        connection: {
            HTTPServer: isHttpReady
        },
        timestamp: Date.now(),
        uptime: process.uptime()
    }

    if (!isEverythingReady) {
        console.error(
            `[Healthcheck] Liveness check is failed: ${JSON.stringify(baseResponse)}`
        )
        throw new HealthCheckError('Liveness check is failed', baseResponse)
    }

    return baseResponse
}

const beforeShutdown = (server: Server) => () => {
    console.info(`Graceful shutdown is starting, trying to complete remaining connections in ${configs.K8S_TERMINATION_GRACE_PERIOD_MS / 1000} seconds`)
    return new Promise((resolve) => {
        let secondsLeft = configs.K8S_TERMINATION_GRACE_PERIOD_MS
        if (configs.NODE_ENV === 'production') {
            setInterval(() => {
                server.getConnections((error, count) => {
                    secondsLeft -= 1000
                    console.warn(`server has ${count} connections remaining. ${secondsLeft / 1000} seconds left.`)
                })
            }, 1000)

            setTimeout(resolve, configs.K8S_TERMINATION_GRACE_PERIOD_MS)
        } else {
            resolve(true)
        }
    })
}

const cleanupComponentsForShutdown = () => {
    return Promise.all([
        /** close all connections */
    ])
}

const onShutdown = async () => {
    console.info('Graceful shutdown down has been finished.')
}

const setupHealthCheck = (server: Server) => {
    createTerminus(server, {
        beforeShutdown: beforeShutdown(server),
        healthChecks: {
            '/startz': startup,
            '/readyz': readiness,
            '/livez': liveness,
        },
        onShutdown: onShutdown,
        onSignal: cleanupComponentsForShutdown,
        signals: ['SIGTERM', 'SIGINT'],
        timeout: configs.K8S_TERMINATION_GRACE_PERIOD_MS
    })
}

export {
    setupHealthCheck,
}