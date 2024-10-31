'use client'

import { Button, Modal } from 'antd'
import { useState } from 'react'

const TailwindExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className='flex flex-col gap-4'>
      <span className='text-primary'>Test CSS</span>
      <Button type="primary" className='w-fit px-10 py-2 h-fit text-2xl' onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        classNames={{
          header: '[&>.ant-modal-title]:text-primary [&>.ant-modal-title]:underline',
          footer: 'flex justify-center [&>*]:w-[100px]'
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default TailwindExample