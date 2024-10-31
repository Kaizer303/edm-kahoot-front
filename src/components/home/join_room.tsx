import { Button, Col, Input, Row } from 'antd'

const JoinRoomSection: React.FC = () => {
  return (
    <Row gutter={2}>
      <Col xs={8}>
        <Input placeholder="Room Pin" />
      </Col>
      <Col xs={8}>
        <Input placeholder="Name" />
      </Col>
      <Col xs={8}>
        <Button>เข้าร่วม</Button>
      </Col>
    </Row>
  )
}

export default JoinRoomSection