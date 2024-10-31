import ApolloClientProvider from '@/contexts/apollo_client'
import TNAnalyticsProvider from '@/contexts/tn_analytics'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <ApolloClientProvider>
        <TNAnalyticsProvider>
          {children}
        </TNAnalyticsProvider>
      </ApolloClientProvider>
    </AntdRegistry>
  )
}

export default Providers