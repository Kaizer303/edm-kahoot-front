import { getClient } from '@/libs/apollo_client_rsc'
import { type StaticSiteGenerationLayoutProps, GET_BUSINESS_TYPE_BY_ID, type GetBusinessTypeByIdResponse } from './types'
import type { Metadata } from 'next'
import { locales } from '@/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'

const dynamicParams = false
const revalidate = 60

const generateStaticParams = async () => {
  return locales.flatMap((locale) => {
    const params = Array.from({ length: 1 }, (_, i) => ({
      id: String(i + 1),
      locale,
    }))
    return params
  })
}

const generateMetadata = async ({ params: { locale, id } }: StaticSiteGenerationLayoutProps) => {
  const client = getClient()
  const response = await client.query<GetBusinessTypeByIdResponse>({
    query: GET_BUSINESS_TYPE_BY_ID,
    variables: { id: +id, l: locale },
  })

  const meta: Metadata = {
    title: `${locale} - ${response.data?.getBusinessTypeByID?.data?.name}`,
    description: 'SSR Description',
  }

  return meta
}

const DynamicPathsLayout: React.FC<StaticSiteGenerationLayoutProps> = ({ children, params }) => {
  // ref: https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
  unstable_setRequestLocale(params.locale)
  return children
}

export default DynamicPathsLayout

export {
  generateMetadata,
  generateStaticParams,
  revalidate,
  dynamicParams,
}