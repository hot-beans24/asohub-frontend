import { useRecoilState } from 'recoil'

import { User, userState } from '@@/features/auth/recoil/user'

/* ⭐️ ユーザー登録情報フック */
const useUserState = () => {
  const [user, setUser] = useRecoilState<User>(userState)

  return {
    user,
    setUser
  }
}

export default useUserState
