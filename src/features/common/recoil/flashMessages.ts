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
  set: ({ set }, newFlashMessages) => {
    if (newFlashMessages instanceof DefaultValue || newFlashMessages === null) {
      return
    }
    console.log({ newFlashMessages })
    set(flashMessagesAtom, (prev) => {
      const keys = newFlashMessages.map((fMessage) => fMessage.key)
      const filteredFlashMessages = prev?.filter((fMessage) => !keys.includes(fMessage.key))
      return [...(filteredFlashMessages || []), ...newFlashMessages]
    })
  },
})

export { flashMessagesAtom, flashMessagesSelector }
