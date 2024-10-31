'use client'

import { UserContext } from '@/contexts/user'
import { useContext } from 'react'

const WelcomeUserSection: React.FC = () => {
  const { username } = useContext(UserContext)

  return (
    <div className="text-2xl">ยินดีต้อนรับ, {username}</div>
  )
}

export default WelcomeUserSection