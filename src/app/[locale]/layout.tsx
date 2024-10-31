import type { Metadata } from 'next'

import type { LayoutProps } from '@/types/common'
import { getTranslations } from 'next-intl/server'
import NextIntlProvider from '@/contexts/next_intl'

export const generateMetadata = async () => {
  const t = await getTranslations('Common')
  const meta: Metadata = {
    title: t('homeTitle'),
    description: t('homeDescription'),
  }
  return meta
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <NextIntlProvider>
      {children}
    </NextIntlProvider>
  )
}

export default RootLayout