import { useLocale, useTranslations } from 'next-intl'
import ChangeLangBtn from '@/components/example/change_lang_btn'
import GoToSSRBtn from '@/components/example/go_to_ssr_btn'
import type { PageProps } from '@/types/common'
import { Col, Divider, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import TailwindExample from '@/components/example/tailwind_example'
import ExampleFont from '@/components/example/font'

const HomePage: React.FC<PageProps> = () => {
  const locale = useLocale()
  const t = useTranslations('Example')

  return (
    <>
      <Title>{t('homeTitle')} {locale}</Title>
      <Divider />
      <Row>
        <Col>
          <ChangeLangBtn />
        </Col>
        <Col>
          <GoToSSRBtn />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <ExampleFont />
        </Col>
      </Row>
      <Divider />
      <TailwindExample />
    </>
  )
}

export default HomePage 