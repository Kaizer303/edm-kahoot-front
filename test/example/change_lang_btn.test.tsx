import ChangeLangBtn from '@/components/example/change_lang_btn'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from '@/navigation'
import { LOCALE } from '@/constants'
import { useLocale } from 'next-intl'

jest.mock('@/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/mocked-pathname'),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}))

jest.mock('next-intl', () => ({
  useLocale: jest.fn().mockReturnValue('th'),
  useTranslations: jest.fn().mockReturnValue(
    jest.fn().mockReturnValue('button_label'),
  ),
}))

describe('[Unit Test] components/example/change_lang_btn.tsx', () => {
  describe('[Snapshot Test]', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<ChangeLangBtn />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('[Component Test]', () => {
    it('should called hooks with correctly pathname and locale EN', async () => {
      const mockRouter = {
        replace: jest.fn(),
      }

      const mockedRouter = useRouter as jest.Mock
      mockedRouter.mockReturnValue(mockRouter)

      const mockedLocale = useLocale as jest.Mock
      mockedLocale.mockReturnValue(LOCALE.TH)

      render(<ChangeLangBtn />)

      fireEvent.click(screen.getByRole('button'))
      expect(mockRouter.replace).toHaveBeenCalledWith('/mocked-pathname', { locale: LOCALE.EN })
    })

    it('should called hooks with correctly pathname and locale TH', async () => {
      const mockRouter = {
        replace: jest.fn(),
      }

      const mockedRouter = useRouter as jest.Mock
      mockedRouter.mockReturnValue(mockRouter)

      const mockedLocale = useLocale as jest.Mock
      mockedLocale.mockReturnValue(LOCALE.EN)

      render(<ChangeLangBtn />)

      fireEvent.click(screen.getByRole('button'))
      expect(mockRouter.replace).toHaveBeenCalledWith('/mocked-pathname', { locale: LOCALE.TH })
    })
  })
})