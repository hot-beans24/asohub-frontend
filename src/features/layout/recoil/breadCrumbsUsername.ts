import { atom } from 'recoil'

// 🌐 Recoilで管理するパンくずリストユーザー名
const BreadCrumbsUsername = atom<string | null>({
  key: 'breadCrumbsUsername',
  default: null,
})

export default BreadCrumbsUsername
