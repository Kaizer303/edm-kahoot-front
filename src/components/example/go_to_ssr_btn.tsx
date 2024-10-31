'use client'

import * as navigation from '@/navigation'
import { Button } from 'antd'
import { useLocale, useTranslations } from 'next-intl'

const GoToSSRBtn: React.FC = () => {
  const router = navigation.useRouter()
  const locale = useLocale()
  const t = useTranslations('Example')

  return (
    <Button type='primary' onClick={() => {
      router.push('/ssr', { locale })
    }}>
      {t('goToSSRBtn')}
    </Button>
  )
}

export default GoToSSRBtn