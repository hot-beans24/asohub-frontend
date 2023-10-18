import { useEffect } from 'react'

import { useRecoilState } from 'recoil'

import { User, userState } from '@@/features/auth/recoil/user'

/* ⭐️ ユーザー登録情報フック */
const useUserState = () => {
  const [user, setUser] = useRecoilState<User>(userState)

  useEffect(() => {
    console.log(user)
  }, [user])

  return {
    user,
    setUser
  }
}

export default useUserState
