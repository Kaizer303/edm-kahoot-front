import { gql } from '@apollo/client'

interface GetBusinessTypeResponse {
  getBusinessType?: {
    data?: {
      id: number,
      name: string
    }[]
  }
}

const GET_BUSINESS_TYPES = gql`
query getBusinessType {
    getBusinessType {
      data {
        id
        name
      }
    }
  }
`

export {
  GET_BUSINESS_TYPES,
}

export type {
  GetBusinessTypeResponse,
}