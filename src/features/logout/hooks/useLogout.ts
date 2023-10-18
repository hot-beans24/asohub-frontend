import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserState from '@@/features/auth/hooks/useUserState'

import LogoutResBody from '@@/features/logout/types/LogoutResBody'

/* ⭐️ ログアウトフック ⭐️ */
const useLogout = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { setUser } = useUserState()

  // 🌐 ログアウト
  const logout = async (): Promise<boolean> => {
    apiInit()

    try {
      await asohubApiClient.post<LogoutResBody>('/logout')

      // ✅ 正常にAPIアクセスできた場合ユーザー認証情報ステートをクリア
      setUser(null)

      return true
    } catch (error) {
      if (isAxiosError(error)) {
        /**
         * ---------------------------------
         * 💡 HTTPステータスコードでエラー処理を分岐
         * ---------------------------------
         * 1. その他
         * ---------------------------------
         */
        switch (error.response?.status) {
          default: {
            setError('ログアウトエラー')
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
    logout,
    isLoading,
    error,
  }
}

export default useLogout
