import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

/* ⭐️ ログインフック ⭐️ */
const useLogin = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { fetchUserAuth } = useUserAuth()

  const login = async (email: string, password: string): Promise<boolean> => {
    apiInit()

    type ResponseBody = {
      result: string
      email: string
      role: string
      login_on: string
    }

    try {
      /* 🍄 実際の処理 🍄 */
      await asohubApiClient.post<ResponseBody>('/login', {
        email, password
      })

      fetchUserAuth()
      return true
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          case HttpStatusCode.BadRequest: {
            setError('入力された値の形式が正しくありません\nもう一度入力してください')
            break
          }
          case HttpStatusCode.Unauthorized: {
            setError('メールアドレスまたは\nパスワードが正しくありません')
            break
          }
          default: {
            setError('ログインエラー')
            console.log(error)
            break
          }
        }
      }
      return false
    } finally {
      apiEnd()
    }
  }

  return {
    login,
    isLoading,
    error
  }
}

export default useLogin
