import type { Metadata } from 'next'

import type { LayoutProps } from '@/types/common'
import { getTranslations } from 'next-intl/server'
import NextIntlProvider from '@/contexts/next_intl'
import { cookies } from 'next/headers'
import { UserProvider } from '@/contexts/user'

export const generateMetadata = async () => {
  const t = await getTranslations('Common')
  const meta: Metadata = {
    title: t('homeTitle'),
    description: t('homeDescription'),
  }
  return meta
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const user = cookies().get('user')?.value ?? ''

  return (
    <NextIntlProvider>
      <UserProvider user={user}>
        {children}
      </UserProvider>
    </NextIntlProvider>
  )
}

export default RootLayout