import { gql } from '@apollo/client'

interface GetBusinessTypeByIdResponse {
  getBusinessTypeByID?: {
    data?: {
      id: number,
      name: string,
    },
  }
}

const GET_BUSINESS_TYPE_BY_ID = gql`
  query getBusinessTypeById($id: Int!, $l: Language) {
    getBusinessTypeByID(id: $id, l: $l) {
      data{
        id
        name
      }
    }
  }
`

interface StaticSiteGenerationPageProps {
  params: {
    locale: string,
    id: string,
  },
}

interface StaticSiteGenerationLayoutProps extends React.PropsWithChildren {
  params: {
    locale: string,
    id: string,
  },
}

export {
  GET_BUSINESS_TYPE_BY_ID,
}

export type {
  GetBusinessTypeByIdResponse,
  StaticSiteGenerationPageProps,
  StaticSiteGenerationLayoutProps,
}