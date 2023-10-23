import { atom } from 'recoil'

import FlashMessages from '@@/features/common/types/FlashMessages'

const flashMessages = atom<FlashMessages>({
  key: 'flashMessages',
  default: null,
})

export default flashMessages
