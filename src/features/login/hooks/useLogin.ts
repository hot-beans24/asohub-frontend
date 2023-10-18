import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'

import LoginResBody from '@@/features/login/types/LoginResBody'

/* ⭐️ ログインフック ⭐️ */
const useLogin = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { fetchUserAuth } = useUserAuth()

  // 🌐 ログイン
  const login = async (email: string, password: string): Promise<boolean> => {
    apiInit()

    try {
      await asohubApiClient.post<LoginResBody>('/login', {
        email,
        password,
      })

      // ✅ 正常にAPIアクセスできた場合ユーザー認証情報を取得
      fetchUserAuth()

      return true
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. 400
         * 2. 401
         * 3. その他
         * ---------------------------------
         */
        switch (error.response?.status) {
          case HttpStatusCode.BadRequest: {
            setError('入力された値の形式が正しくありません\nもう一度入力してください')
            break
          }
          case HttpStatusCode.Unauthorized: {
            setError('メールアドレスまたはパスワードが正しくありません')
            break
          }
          default: {
            setError('ログインエラー')
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
    error,
  }
}

export default useLogin
