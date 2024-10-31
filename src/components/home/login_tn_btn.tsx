'use client'

import { Button } from 'antd'

const LoginThinknetButton: React.FC = () => {
  const onClickedLogin = () => {
    window.location.href = 'https://id.thinknet.co.th/user/checkSession?url=https://edm-kahoot-front-production.up.railway.app/api/v1/auth/tn'
  }

  return (
    <Button onClick={onClickedLogin} >
      <div>
        Login THiNKNET
      </div>
    </Button>
  )
}

export default LoginThinknetButton