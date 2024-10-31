'use client'

import { GET_BUSINESS_TYPES, type GetBusinessTypeResponse } from './types'
import { Link } from '@/navigation'
import { useSuspenseQuery } from '@apollo/client'
import { useLocale } from 'next-intl'
import Title from 'antd/lib/typography/Title'
import { Col, Divider, Row } from 'antd'
import React from 'react'

const SSRPage: React.FC = () => {
  const { data } = useSuspenseQuery<GetBusinessTypeResponse>(GET_BUSINESS_TYPES)
  const locale = useLocale()
  return (
    <>
      <Title>Server Side Rendering</Title>
      <Divider />
      <Row>
        {data.getBusinessType?.data?.map((item) => {
          return (
            <Col key={item.id} xs={24}>
              <Link href={`/ssg/${item.id}`} locale={locale}>
                <div>{item.id} {item.name}</div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default SSRPage
