
'use client'

import { useParams } from 'next/navigation'

const PlayPage = () => {
  const param = useParams()
  return <h1>PlayPage room ID = {param.roomId}</h1>
}

export default PlayPage
