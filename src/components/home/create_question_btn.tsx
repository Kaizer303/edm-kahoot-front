'use client'

import { useRouter } from "@/navigation"
import { Button } from "antd"

const CreateQuestionButton: React.FC = () => {
  const router = useRouter()

  const onCreate = () => {
    router.push('/create-question')
  }
  
  return (
    <Button type='primary' onClick={onCreate} className='w-full'>สร้างคำถาม</Button>
  )
}

export default CreateQuestionButton