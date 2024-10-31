import { getClient } from '@/libs/apollo_client_rsc'
import { type StaticSiteGenerationPageProps, GET_BUSINESS_TYPE_BY_ID, type GetBusinessTypeByIdResponse } from './types'
import { Divider, Row, Col } from 'antd'
import Title from 'antd/lib/typography/Title'

const getBusinessTypeByID = async (id: string, l: string) => {
  const client = getClient()
  const data = await client.query<GetBusinessTypeByIdResponse>({
    query: GET_BUSINESS_TYPE_BY_ID,
    variables: { id: +id, l },
  })
  return data.data.getBusinessTypeByID?.data
}


const StaticSiteGenerationPage: React.FC<StaticSiteGenerationPageProps> = async ({ params }) => {
  const data = await getBusinessTypeByID(params.id, params.locale)
  return (
    <>
      <Title>Static Site Generation Page</Title>
      <Divider />
      <Row>
        <Col>{data?.id} - {data?.name}</Col>
      </Row>
    </>
  )
}

export default StaticSiteGenerationPage
