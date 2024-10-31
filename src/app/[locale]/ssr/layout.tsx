import { getClient } from '@/libs/apollo_client_rsc'
import type { PageProps } from '@/types/common'
import type { Metadata } from 'next'
import { GET_BUSINESS_TYPES, type GetBusinessTypeResponse } from './types'

const fetchCache = 'force-no-store'

const generateMetadata = async ({ params: { locale } }: PageProps) => {
  const client = getClient()
  const response = await client.query<GetBusinessTypeResponse>({ query: GET_BUSINESS_TYPES })
  const meta: Metadata = {
    title: `${locale} - ${response.data?.getBusinessType?.data?.[0].name}`,
    description: 'SSR Description',
  }

  return meta
}

const SSRPageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default SSRPageLayout

export {
  generateMetadata,
  fetchCache,
}