'use client'

import { LOCALE } from '@/constants'
import { usePathname, useRouter } from '@/navigation'
import { Button } from 'antd'
import { useLocale, useTranslations } from 'next-intl'

const ChangeLangBtn: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('Example')

  const onClick = () => {
    const target = locale === LOCALE.TH ? LOCALE.EN : LOCALE.TH
    router.replace(pathname, { locale: target })
  }

  return (
    <Button type='primary' onClick={onClick}>
      {t('changeLangBtn')}
    </Button >
  )
}

export default ChangeLangBtn