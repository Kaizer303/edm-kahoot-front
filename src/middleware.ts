import type { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { LOCALE } from '@/constants'
import { locales, localePrefix } from '@/navigation'

const regexSupportedLocales = RegExp(`^/(${locales.join('|')})(/.*)?$`)

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale: LOCALE.TH,
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const shouldHandle = pathname === '/' || regexSupportedLocales.test(pathname)
  if (!shouldHandle) return
  return intlMiddleware(request)
}