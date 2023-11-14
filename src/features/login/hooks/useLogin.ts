import useSWRMutation from 'swr/mutation'

import useFetcher from '@@/features/api/hooks/useFetcher'

import RequestBody from '@@/features/api/types/httpbody/request/Login'
import ResponseBody from '@@/features/api/types/httpbody/response/Login'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

/* ⭐️ ログインフック ⭐️ */
const useLogin = () => {
  const fetcher = useFetcher<RequestBody, ResponseBody>('login', {
    method: 'POST',
    errors: {
      badrequest: {
        key: 'login-BadRequest',
        message: '入力された値の形式が正しくありません\nもう一度入力してください',
      },
      unauthorized: { key: 'login-Unauthorized', message: 'メールアドレスまたはパスワードが正しくありません' },
    },
  })

  const { error, isMutating, trigger } = useSWRMutation('/api/login', fetcher)

  const { fetchUserAuth } = useUserAuth()

  const login = async (email: string, password: string): Promise<boolean> => {
    const result = await trigger({ email, password })
    if (result) {
      await fetchUserAuth()
    }
    return !!result
  }

  return {
    login,
    isMutating,
    error,
  }
}

export default useLogin
