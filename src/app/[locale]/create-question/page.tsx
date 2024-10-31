// app/questions/create/page.tsx
'use client'

import React, { useState } from 'react'
import {
  Button,
  Card,
  Input,
  InputNumber,
  Space,
  Alert,
  Typography,
  Divider,
  Layout,
  Menu,
  theme,
  Tooltip,
  Modal
} from 'antd'
import {
  PlusOutlined,
  DeleteOutlined,
  CheckOutlined,
  SaveOutlined,
  ClockCircleOutlined,
  QuestionCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { notification } from 'antd'
import axios from 'axios'

const { Title, Text } = Typography
const { TextArea } = Input
const { Header, Sider, Content } = Layout

interface Answer {
  id: number
  name: string
  isCorrect: boolean
}

interface Question {
  id: number
  name: string
  timer: number
  choices: Answer[]
}

const QuestionCreator: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([{
    id: 1,
    name: '',
    timer: 10,
    choices: [{
      id: 1,
      name: '',
      isCorrect: false
    }]
  }])
  const [errors, setErrors] = useState<string[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [questionToDelete, setQuestionToDelete] = useState<number | null>(null)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  // เลือกคำถามที่แสดงอยู่ปัจจุบัน
  const currentQuestion = questions.find(q => q.id === selectedQuestionId)

  const getQuestionTitle = (question: Question, index: number) => {
    const title = question.name.trim() || `คำถามที่ ${index + 1}`
    return title.length > 30 ? title.substring(0, 30) + '...' : title
  }

  const validateQuestions = (): boolean => {
    const newErrors: string[] = []
    
    questions.forEach((question, index) => {
      if (!question.name.trim()) {
        newErrors.push(`คำถามที่ ${index + 1} ไม่มีเนื้อหา`)
      }
      
      if (question.timer <= 0) {
        newErrors.push(`คำถามที่ ${index + 1} ต้องกำหนดเวลามากกว่า 0 วินาที`)
      }
      
      if (question.choices.length < 2) {
        newErrors.push(`คำถามที่ ${index + 1} ต้องมีตัวเลือกอย่างน้อย 2 ข้อ`)
      }
      
      question.choices.forEach((answer, aIndex) => {
        if (!answer.name.trim()) {
          newErrors.push(`คำตอบที่ ${aIndex + 1} ของคำถามที่ ${index + 1} ไม่มีเนื้อหา`)
        }
      })
      
      const hasCorrectAnswer = question.choices.some(answer => answer.isCorrect)
      if (!hasCorrectAnswer) {
        newErrors.push(`คำถามที่ ${index + 1} ต้องมีคำตอบที่ถูกต้องอย่างน้อย 1 ข้อ`)
      }
    })
    
    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSave = async () => {
    if (validateQuestions()) {
      try {
        const questionsData = questions.map(q => ({
          name: q.name,
          timer: q.timer,
          choices: q.choices.map(a => ({
            name: a.name,
            isCorrect: a.isCorrect
          }))
        }))

        console.log('Saving questions:', questionsData)


        // await axios.post('/rooms', { questions: questionsData })
        
        notification.success({
          message: 'บันทึกสำเร็จ',
          description: 'บันทึกคำถามเรียบร้อยแล้ว',
        })
      } catch (error) {
        notification.error({
          message: 'เกิดข้อผิดพลาด',
          description: 'ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง',
        })
      }
    }
  }

  const addQuestion = () => {
    const newId = Math.max(...questions.map(q => q.id)) + 1
    const newQuestion = {
      id: newId,
      name: '',
      timer: 10,
      choices: [{
        id: 1,
        name: '',
        isCorrect: false
      }]
    }
    setQuestions([...questions, newQuestion])
    setSelectedQuestionId(newId)
  }

  const addAnswer = (questionId: number) => {
    setQuestions(questions.map(question => {
      if (question.id === questionId) {
        const newAnswerId = Math.max(...question.choices.map(a => a.id)) + 1
        return {
          ...question,
          choices: [...question.choices, {
            id: newAnswerId,
            name: '',
            isCorrect: false
          }]
        }
      }
      return question
    }))
  }

  const updateQuestion = (questionId: number, name: string) => {
    setQuestions(questions.map(question => 
      question.id === questionId ? { ...question, name } : question
    ))
  }

  const updateTimeLimit = (questionId: number, timer: number | null) => {
    setQuestions(questions.map(question =>
      question.id === questionId ? { ...question, timer: timer || 0 } : question
    ))
  }

  const updateAnswer = (questionId: number, answerId: number, name: string) => {
    setQuestions(questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          choices: question.choices.map(answer =>
            answer.id === answerId ? { ...answer, name } : answer
          )
        }
      }
      return question
    }))
  }

  const toggleCorrectAnswer = (questionId: number, answerId: number) => {
    setQuestions(questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          choices: question.choices.map(answer =>
            answer.id === answerId 
              ? { ...answer, isCorrect: !answer.isCorrect }
              : answer
          )
        }
      }
      return question
    }))
  }

  const removeAnswer = (questionId: number, answerId: number) => {
    setQuestions(questions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          choices: question.choices.filter(answer => answer.id !== answerId)
        }
      }
      return question
    }))
  }

  const confirmDeleteQuestion = (questionId: number) => {
    setQuestionToDelete(questionId)
    setDeleteModalVisible(true)
  }

  const handleDeleteQuestion = () => {
    if (questionToDelete === null) return
    
    const newQuestions = questions.filter(q => q.id !== questionToDelete)
    setQuestions(newQuestions)
    
    if (selectedQuestionId === questionToDelete) {
      setSelectedQuestionId(newQuestions[0]?.id || 0)
    }
    
    setDeleteModalVisible(false)
    setQuestionToDelete(null)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        theme='light'
        width={300}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '16px'
        }}>
          {!collapsed && <Title level={4} style={{ margin: 0 }}>รายการคำถาม</Title>}
          {/* <Button
            type='name'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          /> */}
          <Button
            type='primary'
            icon={<SaveOutlined />}
            onClick={handleSave}
            size='large'
          >
            สร้าง
          </Button>
        </div>
        <Menu
          mode='inline'
          selectedKeys={[selectedQuestionId.toString()]}
          style={{ borderRight: 0 }}
          items={questions.map((question, index) => ({
            key: question.id.toString(),
            icon: <QuestionCircleOutlined />,
            label: getQuestionTitle(question, index),
            onClick: () => setSelectedQuestionId(question.id)
          }))}
        />
        <div style={{ padding: '16px' }}>
          <Button
            type='dashed'
            icon={<PlusOutlined />}
            onClick={addQuestion}
            block
          >
            {!collapsed && 'เพิ่มคำถามใหม่'}
          </Button>
        </div>
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 300, transition: 'all 0.2s' }}>
        {/* <Header style={{ 
          padding: '0 24px', 
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <Title level={4} style={{ margin: 0 }}>สร้างคำถาม</Title>
          <Button
            type='primary'
            icon={<SaveOutlined />}
            onClick={handleSave}
            size='large'
          >
            บันทึก
          </Button>
        </Header> */}

        <Content style={{ margin: '24px', background: colorBgContainer, padding: 24, minHeight: 280 }}>
          {errors.length > 0 && (
            <Alert
              message='พบข้อผิดพลาด'
              description={
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              }
              type='error'
              showIcon
              style={{ marginBottom: 24 }}
            />
          )}

          {currentQuestion && (
            <Card
              title={`คำถามที่ ${questions.findIndex(q => q.id === currentQuestion.id) + 1}`}
              extra={
                <Button
                  type='name'
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => confirmDeleteQuestion(currentQuestion.id)}
                />
              }
            >
              <Space direction='vertical' size='middle' style={{ width: '100%' }}>
                <TextArea
                  placeholder='พิมพ์คำถามของคุณที่นี่'
                  value={currentQuestion.name}
                  onChange={(e) => updateQuestion(currentQuestion.id, e.target.value)}
                  autoSize={{ minRows: 2 }}
                />

                <Space>
                  <ClockCircleOutlined />
                  <InputNumber
                    min={0}
                    defaultValue={10}
                    placeholder='เวลา'
                    value={currentQuestion.timer}
                    onChange={(value) => updateTimeLimit(currentQuestion.id, value)}
                    style={{ width: 100 }}
                  />
                  <Text type='secondary'>วินาที</Text>
                </Space>

                <Divider>คำตอบ</Divider>

                <Space direction='vertical' style={{ width: '100%' }}>
                  {currentQuestion.choices.map((answer) => (
                    <Space key={answer.id} style={{ width: '100%' }}>
                      <Tooltip title={answer.isCorrect ? 'คำตอบที่ถูกต้อง' : 'คลิกเพื่อตั้งเป็นคำตอบที่ถูกต้อง'}>
                        <Button
                          type={answer.isCorrect ? 'primary' : 'default'}
                          icon={<CheckOutlined />}
                          onClick={() => toggleCorrectAnswer(currentQuestion.id, answer.id)}
                        />
                      </Tooltip>
                      <Input
                        placeholder='พิมพ์คำตอบ'
                        value={answer.name}
                        onChange={(e) => updateAnswer(currentQuestion.id, answer.id, e.target.value)}
                        style={{ flex: 1 }}
                      />
                      {currentQuestion.choices.length > 1 && (
                        <Button
                          type='name'
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => removeAnswer(currentQuestion.id, answer.id)}
                        />
                      )}
                    </Space>
                  ))}
                </Space>

                <Button
                  type='dashed'
                  icon={<PlusOutlined />}
                  onClick={() => addAnswer(currentQuestion.id)}
                  block
                >
                  เพิ่มคำตอบ
                </Button>
              </Space>
            </Card>
          )}
        </Content>
      </Layout>

      <Modal
        title='ยืนยันการลบคำถาม'
        open={deleteModalVisible}
        onOk={handleDeleteQuestion}
        onCancel={() => {
          setDeleteModalVisible(false)
          setQuestionToDelete(null)
        }}
        okText='ลบ'
        cancelText='ยกเลิก'
      >
        <p>คุณแน่ใจหรือไม่ที่ต้องการลบคำถามนี้?</p>
      </Modal>
    </Layout>
  )
}

export default QuestionCreator