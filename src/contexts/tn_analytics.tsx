'use client'

import axios from 'axios'
import { useContext, useEffect } from 'react'

import configs from '@/configs'
import {
  TNAnalyticsContext, TNAnalyticsProvider as _TNAnalyticsProvider
} from '@thinknet/tn-analytics-web'


const params = {
  config: {
    trackType: configs.TN_ANALYTICS_TRACK_TYPE,
    firehoseEnable: configs.TN_ANALYTICS_ENABLE,
    firehoseTimer: configs.TN_ANALYTICS_FIREHOSE_TIMER,
    refreshURL: configs.TN_ANALYTICS_ENDPOINT,
    blacklist: {
      click: [''],
      view: [''],
    },
  },
}

const AppTNAnalytics: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setupFirehose } = useContext(TNAnalyticsContext)

  useEffect(() => {
    if (params.config.firehoseEnable) {
      setupTNAnalytics()
    }
  }, [])

  const setupTNAnalytics = async () => {
    try {
      const { data } = await axios.post(configs.TN_ANALYTICS_ENDPOINT)
      setupFirehose({
        ip: '',
        region: configs.TN_ANALYTICS_REGION,
        identityID: data.cognito.IdentityId,
        token: data.cognito.Token,
        firehoseStreamName: configs.TN_ANALYTICS_FIREHOSE_STREAM_NAME,
      })
    } catch (err) {
      console.warn('[TNAnalyticsProvider] failed to setup tn analytics', err)
    }
  }
  return children
}

const TNAnalyticsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <_TNAnalyticsProvider {...params}>
      <AppTNAnalytics>
        {children}
      </AppTNAnalytics>
    </_TNAnalyticsProvider>
  )
}

export default TNAnalyticsProvider