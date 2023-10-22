import { DefaultValue, atom, selector } from 'recoil'

import NavbarWidth from '@@/features/layout/types/NavbarWidth'

const KEY = 'asohubNavberIsWide'

// 🌐 Reoilで管理するナビゲーションバーの幅
const navbarWidth = atom<NavbarWidth>({
  key: 'navbarWidth',
  default: {
    isWide: localStorage.getItem(KEY) === 'true',
  },
})

const navbarWidthSelector = selector<boolean>({
  key: 'navbarWidthSelector',
  get: ({ get }) => {
    const { isWide } = get(navbarWidth)
    return isWide
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(navbarWidth, newValue)
    } else {
      localStorage.setItem(KEY, newValue.toString())
      set(navbarWidth, { isWide: newValue })
    }
  },
})

export default navbarWidthSelector
