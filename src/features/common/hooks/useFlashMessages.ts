import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'

import { flashMessagesAtom, flashMessagesSelector } from '@@/features/common/recoil/flashMessages'

import FlashMessages from '@@/features/common/types/FlashMessages'

const useFlashMessages = () => {
  const [flashMessages, setFlashMessages] = useRecoilState<FlashMessages>(flashMessagesSelector)
  const setDeletedOneFlashMessages = useSetRecoilState(flashMessagesAtom)
  const resetFlashMessages = useResetRecoilState(flashMessagesAtom)

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

  const deleteFlashMessage = (key: string) => {
    setDeletedOneFlashMessages((prev) => prev?.filter((fMessage) => fMessage.key !== key) ?? null)
  }

  return {
    flashMessages,
    setFlashMessages,
    deleteFlashMessage,
  }
}

export default useFlashMessages