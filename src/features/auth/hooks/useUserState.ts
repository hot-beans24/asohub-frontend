import { useRecoilState } from 'recoil'

import recoilUser from '@@/features/auth/recoil/user'
import User from '@@/features/auth/types/User'

/* ⭐️ ユーザー認証情報ステートフック ⭐️ */
const useUserState = () => {
  // 🌐 ユーザー認証情報ステート
  const [user, setUser] = useRecoilState<User>(recoilUser)

  return {
    user,
    setUser,
  }
}

export default useUserState
