'use client'

import { UserContext } from '@/contexts/user'
import { useRouter } from '@/navigation'
import { Button, Input, notification } from 'antd'
import axios from 'axios'
import { useContext, useState } from 'react'

const LoginUsernameForm: React.FC = () => {
  const router = useRouter()
  const { setUsername: setUsernameCtx, username: u } = useContext(UserContext)

  const [username, setUsername] = useState<string>('')

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onSubmit = async () => {
    try {
      await axios.post('/api/v1/auth/guest', { username })
      setUsernameCtx(username)
      router.replace('/home')
    } catch (err) {
      notification.error({
        message: 'failed to login guest',
        description: `${err}`,
      })
    }
  }
  
  return (
    <>
      <div className='mb-4'>
        <Input type="text" placeholder='ชื่อผู้เล่น' onChange={onChangeUsername} />
      </div>
      <div className='mb-8'>
        <Button disabled={username === ''} type='primary' className='w-full' onClick={onSubmit}>เข้าร่วม</Button >
      </div>
    </>
  )
}

export default LoginUsernameForm