'use client'

import { UserContext } from '@/contexts/user'
import { Button } from 'antd'
import { useContext } from 'react'

const LoginThinknetButton: React.FC = () => {
  const { username } = useContext(UserContext)

  const onClickedLogin = () => {
    window.location.href = 'https://id.thinknet.co.th/user/checkSession?url=http://localhost:3000/api/v1/auth/tn'
  }

  
  if (username !== 'Guest') {
    return null
  }

  return (
    <Button onClick={onClickedLogin}>
      <div>
        Login THiNKNET
      </div>
    </Button>
  )
}

export default LoginThinknetButton