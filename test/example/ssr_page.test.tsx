import SSRPage from '@/app/[locale]/ssr/page'
import { render } from '@testing-library/react'
import { useSuspenseQuery } from '@apollo/client'
import type { GetBusinessTypeResponse } from '@/app/[locale]/ssr/types'

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useSuspenseQuery: jest.fn(),
  gql: jest.fn(),
}))

jest.mock('next-intl', () => ({
  useLocale: jest.fn().mockReturnValue('th'),
}))

jest.mock('@/navigation', () => ({
  __esModule: true, // Required for some module systems
  Link: jest.fn(({ children, ...props }) => <div data-mock-component='Link' {...props}>{children}</div>),
}))

describe('[Page] src/app/[locale]/ssr/page.tsx', () => {
  describe('[Snapshot Test]', () => {
    it('should match no data snapshot', async () => {
      const mockData: GetBusinessTypeResponse = {
        getBusinessType: {
          data: [],
        },
      }

      const useSuspenseQueryMock = useSuspenseQuery as jest.Mock
      useSuspenseQueryMock.mockReturnValue({ data: mockData })

      const { asFragment } = render(<SSRPage />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('should match 1 data snapshot', async () => {
      const mockData: GetBusinessTypeResponse = {
        getBusinessType: {
          data: [
            {
              id: 1,
              name: 'data1',
            },
          ],
        },
      }

      const useSuspenseQueryMock = useSuspenseQuery as jest.Mock
      useSuspenseQueryMock.mockReturnValue({ data: mockData })

      const { asFragment } = render(<SSRPage />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('should match multiple data snapshot', async () => {
      const mockData: GetBusinessTypeResponse = {
        getBusinessType: {
          data: [
            {
              id: 1,
              name: 'data1',
            },
            {
              id: 2,
              name: 'data2',
            },
            {
              id: 3,
              name: 'data3',
            },
          ],
        },
      }

      const useSuspenseQueryMock = useSuspenseQuery as jest.Mock
      useSuspenseQueryMock.mockReturnValue({ data: mockData })

      const { asFragment } = render(<SSRPage />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})