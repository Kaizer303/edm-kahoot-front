import type { NextFunction, Request, Response } from 'express'
import configs from '@/configs'
import { TNAnalyticsForServer } from '@thinknet/tn-analytics-server'

// eslint-disable-next-line no-unused-vars
let _getAWSCognitoToken: (req: Request, res: Response) => Promise<void>

const setBackendToken = (req: Request, _: Response, next: NextFunction) => {
    req.body.backendToken = configs.TN_ANALYTICS_BACKEND_TOKEN
    next()
}

const getAwsCognitoToken = (req: Request, res: Response): Promise<void> => {
    if (!_getAWSCognitoToken) {
        const result = TNAnalyticsForServer({
            region: configs.TN_ANALYTICS_REGION,
            accessKey: configs.TN_ANALYTICS_ACCESS_KEY,
            secretKey: configs.TN_ANALYTICS_SECRET_KEY,
            identityPoolID: configs.TN_ANALYTICS_IDENTITY_POOL_ID,
            developerProviderName: configs.TN_ANALYTICS_PROVIDER_NAME,
            returnIPAddress: configs.TN_ANALYTICS_RETURN_IP_ADDRESS,
            encryptionKey: configs.TN_ANALYTICS_ENCRYPTION_KEY,
        })
        _getAWSCognitoToken = result.getAWSCognitoToken
    }
    return _getAWSCognitoToken(req, res)
}

const controller = {
    setBackendToken,
    getAwsCognitoToken,
}

export default controller