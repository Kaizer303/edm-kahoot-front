import LoginThinknetButton from '@/components/home/login_tn_btn'
import LoginUsernameForm from '@/components/home/login_username_form'
import { redirect } from '@/navigation'
import type { PageProps } from '@/types/common'
import { cookies } from 'next/headers'

const HomePage: React.FC<PageProps> = () => {
  const user = cookies().get('user')?.value ?? ''

  if (user) {
    return redirect('/home')
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full text-center p-4">
        <LoginUsernameForm />
        <div className='mb-8'>หรือ</div>
        <div>
          <LoginThinknetButton />
        </div>
      </div>
    </div>
  )
}

export default HomePage 