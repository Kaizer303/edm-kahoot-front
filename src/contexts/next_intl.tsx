import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'

const NextIntlProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const messages = useMessages()
  const locale = useLocale()
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  )
}

export default NextIntlProvider