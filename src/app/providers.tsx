import ApolloClientProvider from '@/contexts/apollo_client'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <ApolloClientProvider>
          {children}
      </ApolloClientProvider>
    </AntdRegistry>
  )
}

export default Providers