import JoinRoomSection from '@/components/home/join_room'
import LoginThinknetButton from '@/components/home/login_tn_btn'
import WelcomeUserSection from '@/components/home/welcome_user'
import type { PageProps } from '@/types/common'
import { Button } from 'antd'

const HomePage: React.FC<PageProps> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full text-center p-4">
        <div className='mb-8'>
          <WelcomeUserSection />
        </div>
        <div className='mb-8'>
          <Button>สร้างคำถาม</Button>
        </div>
        <div className='mb-8'>
          <JoinRoomSection />
        </div>
        <div>
          <LoginThinknetButton />
        </div>
      </div>
    </div>
  )
}

export default HomePage 