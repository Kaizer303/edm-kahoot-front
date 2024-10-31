'use client'

import { UserContext } from '@/contexts/user'
import { useRouter } from '@/navigation'
import { joinRoom } from '@/services/room'
import { Button, Input, notification } from 'antd'
import { useContext, useState } from 'react'

const JoinRoomSection: React.FC = () => {
  const [pinID, setPinID] = useState<string>('')
  const { username } = useContext(UserContext)
  const router = useRouter()

  const onChangePinID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinID(e.target.value)
  }

  const onJoin = async () => {
    try {
      const { roomID } = await joinRoom(pinID, username)
      router.push(`/rooms/${roomID}`)
    } catch (err) {
      notification.error({
        message: 'failed to join room',
        description: `${err}`,
      })
    }
  }

  return (
    <div className='flex flex-row'>
      <Input placeholder="Room Pin" onChange={onChangePinID} />
      <Button disabled={pinID === ''} type='primary' onClick={onJoin}>เข้าร่วม</Button>
    </div>
  )
}

export default JoinRoomSection