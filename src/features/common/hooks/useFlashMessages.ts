import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import recoilFlashMessages from '@@/features/common/recoil/flashMessages'

import FlashMessages from '@@/features/common/types/FlashMessages'

const useFlashMessages = () => {
  const [flashMessages, setFlashMessages] = useRecoilState<FlashMessages>(recoilFlashMessages)
  const resetFlashMessages = useResetRecoilState(recoilFlashMessages)

  useEffect(() => {
    setTimeout(() => {
      resetFlashMessages()
    }, 15000)

    return () => {
      resetFlashMessages()
    }
  }, [])

  useEffect(() => {
    console.log(flashMessages)
  }, [flashMessages])

  const deleteFlashMessage = (key: number) => {
    setFlashMessages((prev) => prev?.filter((_, index) => index !== key) ?? null)
  }

  return {
    flashMessages,
    setFlashMessages,
    deleteFlashMessage,
  }
}

export default useFlashMessages
