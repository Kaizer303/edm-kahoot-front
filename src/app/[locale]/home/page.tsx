import CreateQuestionButton from '@/components/home/create_question_btn'
import JoinRoomSection from '@/components/home/join_room'
import WelcomeUserSection from '@/components/home/welcome_user'
import type { PageProps } from '@/types/common'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const HomePage: React.FC<PageProps> = () => {
  const user = cookies().get('user')?.value ?? ''
  if (!user) {
    return redirect('/')
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full text-center p-4">
        <div className='mb-8'>
          <WelcomeUserSection />
        </div>
        <div className='mb-8'>
          <CreateQuestionButton />
        </div>
        <div className='mb-8'>
          <JoinRoomSection />
        </div>
      </div>
    </div>
  )
}

export default HomePage 