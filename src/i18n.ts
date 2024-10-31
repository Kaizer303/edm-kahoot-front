import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/navigation'

const i18nMiddleware = getRequestConfig(async ({ locale }: { locale: string}) => {
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`./messages/${locale}.ts`)).default
  }
})

export default i18nMiddleware