import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import FlashMessage from '@@/features/common/types/FlashMessage'

const useFlashMessages = () => {
  const location = useLocation()
  const [flashMessages, setFlashMessages] = useState<FlashMessage[] | null>(location.state?.flashMessages as FlashMessage[])

  useEffect(() => {
    setFlashMessages(location.state?.flashMessages as FlashMessage[])
    setTimeout(() => {
      setFlashMessages(null)
    }, 15000)
  }, [location.state])

  const deleteFlashMessage = (key: number) => {
    setFlashMessages((prev) => prev?.filter((_, index) => index !== key) ?? null)
  }

  return {
    flashMessages,
    deleteFlashMessage
  }
}

export default useFlashMessages