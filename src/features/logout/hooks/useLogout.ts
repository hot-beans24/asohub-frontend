import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserState from '@@/features/auth/hooks/useUserState'

/* ⭐️ ログアウトフック ⭐️ */
const useLogout = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { setUser } = useUserState()

  const logout = async (): Promise<boolean> => {
    apiInit()

    type ResponseBody = {}

    try {
      /* 🍄 実際の処理 🍄 */
      await asohubApiClient.post<ResponseBody>('/logout')

      setUser(null)
      return true
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          default: {
            setError('ログアウトエラー')
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
    logout,
    isLoading,
    error
  }
}

export default useLogout
