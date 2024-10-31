'use client'

import JoinRoomSection from '@/components/home/join_room'
import WelcomeUserSection from '@/components/home/welcome_user'
import useUnAuthenEffect from '@/hooks/use_unauthen_effect'
import { useRouter } from '@/navigation'
import type { PageProps } from '@/types/common'
import { Button } from 'antd'

const HomePage: React.FC<PageProps> = () => {
  useUnAuthenEffect()
  const router = useRouter()

  const onCreate = () => {
    router.push('/create-question')
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full text-center p-4">
        <div className='mb-8'>
          <WelcomeUserSection />
        </div>
        <div className='mb-8'>
          <Button onClick={onCreate} className='w-full'>สร้างคำถาม</Button>
        </div>
        <div className='mb-8'>
          <JoinRoomSection />
        </div>
      </div>
    </div>
  )
}

export default HomePage 