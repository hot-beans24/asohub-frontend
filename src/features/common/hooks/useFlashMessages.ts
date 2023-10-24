import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'

import { flashMessagesAtom, flashMessagesSelector } from '@@/features/common/recoil/flashMessages'

import FlashMessages from '@@/features/common/types/FlashMessages'

const useFlashMessages = () => {
  const [flashMessages, setFlashMessages] = useRecoilState<FlashMessages>(flashMessagesSelector)
  const setFilteredFlashMessages = useSetRecoilState(flashMessagesAtom)
  const resetFlashMessages = useResetRecoilState(flashMessagesAtom)

  const deleteFlashMessage = (key: string) => {
    setFilteredFlashMessages((prev) => prev?.filter((fMessage) => fMessage.key !== key) ?? null)
  }

  const deleteNotCrossPageFlashMessages = () => {
    setFilteredFlashMessages((prev) => prev?.filter((fMessage) => fMessage.isCrossPage) ?? null)
  }

  const deleteErrorFlashMessages = () => {
    setFilteredFlashMessages((prev) => prev?.filter((fMessage) => fMessage.type !== 'error') ?? null)
  }

  return {
    flashMessages,
    setFlashMessages,
    deleteFlashMessage,
    deleteNotCrossPageFlashMessages,
    deleteErrorFlashMessages,
    resetFlashMessages,
  }
}

export default useFlashMessages
