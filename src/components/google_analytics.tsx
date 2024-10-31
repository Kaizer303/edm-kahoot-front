import { GoogleTagManager } from '@next/third-parties/google'

import configs from '@/configs'

const GoogleAnalytics: React.FC = () => {
  if (!configs.GOOGLE_ANALYTICS_ENABLE) {
    return null
  }

  return (
    <GoogleTagManager gtmId={configs.GOOGLE_TAG_MANAGER_ID} />
  )
}

export default GoogleAnalytics
