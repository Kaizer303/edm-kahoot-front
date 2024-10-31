'use client'

import { UserContext } from '@/contexts/user'
import { useRouter } from '@/navigation'
import { Button, Col, Input, Row } from 'antd'
import { useContext, useState } from 'react'

const JoinRoomSection: React.FC = () => {
  const { username } = useContext(UserContext)
  const [roomID, setRoomID] = useState<string>()
  const router = useRouter()

  const onChangeRoomID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomID(e.target.value)
  }

  const onJoin = () => {
    router.push(`/${roomID}`)
  }

  return (
    <Row gutter={2}>
      <Col xs={8}>
        <Input placeholder="Room Pin" onChange={onChangeRoomID} />
      </Col>
      <Col xs={8}>
        <Input
          readOnly={username !== 'Guest'}
          defaultValue={username}
          placeholder="Name"
        />
      </Col>
      <Col xs={8}>
        <Button onClick={onJoin}>เข้าร่วม</Button>
      </Col>
    </Row>
  )
}

export default JoinRoomSection