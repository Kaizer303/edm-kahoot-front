import Providers from '@/app/providers'
import GoogleAnalytics from '@/components/google_analytics'
import NewRelic from '@/components/new_relic'
import { superstore } from '@/fonts'
import type { LayoutProps } from '@/types/common'
import '@/app/global.css'
import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'NextJS Bootstrap',
  description: 'NextJS bootstrap repo',
}

const RootLayout: React.FC<LayoutProps> = ({ children, params }) => {
  return (
    <html className={superstore.className} lang={params.locale}>
      <head>
        <GoogleAnalytics />
        <NewRelic />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout