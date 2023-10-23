import { atom } from 'recoil'

import User from '@@/features/auth/types/User'

// 🌐 Recoilで管理するユーザー認証情報
const user = atom<User>({
  key: 'user',
  default: null,
})

export default user
