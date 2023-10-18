import { useRecoilState } from 'recoil'

import { User, userState } from '@@/features/auth/recoil/user'

/* ⭐️ ユーザー認証情報ステートフック ⭐️ */
const useUserState = () => {
  // 🌐 ユーザー認証情報ステート
  const [user, setUser] = useRecoilState<User>(userState)

  return {
    user,
    setUser,
  }
}

export default useUserState
