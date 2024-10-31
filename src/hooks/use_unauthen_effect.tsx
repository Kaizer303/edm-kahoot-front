'use client'

import { UserContext } from "@/contexts/user"
import { useRouter } from "@/navigation"
import { useContext } from "react"

const useUnAuthenEffect = () => {
  const router = useRouter()
  const { username } = useContext(UserContext)
  if (!username) {
    router.replace('/')
  }
}

export default useUnAuthenEffect