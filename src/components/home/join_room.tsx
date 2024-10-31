'use client'

import { useRouter } from '@/navigation'
import { Button, Input } from 'antd'
import {  useState } from 'react'

const JoinRoomSection: React.FC = () => {
  const [roomID, setRoomID] = useState<string>()
  const router = useRouter()

  const onChangeRoomID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomID(e.target.value)
  }

  const onJoin = () => {
    router.push(`/rooms/${roomID}`)
  }

  return (
    <div className='flex flex-row'>
      <Input placeholder="Room Pin" onChange={onChangeRoomID} />
      <Button onClick={onJoin}>เข้าร่วม</Button>
    </div>
  )
}

export default JoinRoomSection