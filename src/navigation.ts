import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { SUPPORTED_LOCALES } from './constants'

export const locales = SUPPORTED_LOCALES
export const localePrefix = 'always'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})