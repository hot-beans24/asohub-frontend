import { DefaultValue, atom, selector } from 'recoil'

import FlashMessages from '@@/features/common/types/FlashMessages'

const flashMessages = atom<FlashMessages>({
  key: 'flashMessages',
  default: null,
})

const flashMessagesSelector = selector<FlashMessages>({
  key: 'flashMessagesSelector',
  get: ({ get }) => {
    return get(flashMessages)
  },
  set: ({ get, set }, newFlashMessages) => {
    const fMessages = get(flashMessages)
    const keys = fMessages?.map((fmessage) => fmessage.key) || []
    if (newFlashMessages instanceof DefaultValue || newFlashMessages === null) {
      return
    }
    newFlashMessages.forEach((fMessage) => {
      if (!keys.includes(fMessage.key)) {
        set(flashMessages, (prev) => [...(prev || []), fMessage])
      }
    })
  },
})
export default flashMessagesSelector
