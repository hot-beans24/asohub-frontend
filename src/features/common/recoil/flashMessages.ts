import { DefaultValue, atom, selector } from 'recoil'

import FlashMessages from '@@/features/common/types/FlashMessages'

const flashMessagesAtom = atom<FlashMessages>({
  key: 'flashMessagesAtom',
  default: null,
})

const flashMessagesSelector = selector<FlashMessages>({
  key: 'flashMessagesSelector',
  get: ({ get }) => {
    return get(flashMessagesAtom)
  },
  set: ({ get, set }, newFlashMessages) => {
    const fMessages = get(flashMessagesAtom)
    if (newFlashMessages instanceof DefaultValue || newFlashMessages === null) {
      return
    }
    const keys = fMessages?.map((fmessage) => fmessage.key) || []
    newFlashMessages.forEach((fMessage) => {
      if (!keys.includes(fMessage.key)) {
        set(flashMessagesAtom, (prev) => [...(prev || []), fMessage])
      }
    })
  },
})

export { flashMessagesAtom, flashMessagesSelector }
