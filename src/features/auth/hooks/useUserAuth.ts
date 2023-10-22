import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'

import useAPIStatus from '@@/features/api/hooks/useAPIStatus'
import FetchUserAuthResBody from '@@/features/api/types/FetchUserAuthResBody'

import useUserState from '@@/features/auth/hooks/useUserState'

/* ⭐️ ユーザー認証情報フック ⭐️ */
const useUserAuth = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { user, setUser } = useUserState()

  // 🌐 ログイン済みかを判定
  const isLoggedIn = (): boolean => {
    return !!user
  }

  // 🌐 ユーザー認証情報を取得
  const fetchUserAuth = async (): Promise<void> => {
    apiInit()

    /**
     * -----------------------------------
     * 💡 ユーザー認証情報を取得済みかどうかを判定
     * -----------------------------------
     * ✅ 取得済みの場合は処理を終了
     * ❌ 未取得の場合は続けて処理を実行
     * -----------------------------------
     */
    if (isLoggedIn()) return

    try {
      const res = await asohubApiClient.get<FetchUserAuthResBody>('/auth-status')

      const userAuthData = res.data.user

      /**
       * ------------------------------------
       * 💡 ログイン済みかどうかを判定
       * ------------------------------------
       * ✅ ログイン済みの場合はユーザー認証情報を保存
       * ❌ 未ログインの場合はユーザー認証情報を削除
       * ------------------------------------
       */
      if (res.data.authenticated && userAuthData) {
        setUser({
          id: userAuthData.user_id,
          email: userAuthData.email,
          name: userAuthData.user_name,
          departmentID: userAuthData.department_id,
          grade: userAuthData.grade,
          githubUserID: userAuthData.github_username,
          githubUserIcon: userAuthData.github_user_icon,
          role: userAuthData.role,
        })
      } else {
        setUser(null)
        setError('ログインしていません')
      }
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
            setUser(null)
            setError('ユーザー認証情報取得エラー')
            break
          }
        }
      }
    } finally {
      apiEnd()
    }
  }

  return {
    isLoggedIn,
    fetchUserAuth,
    isLoading,
    error,
  }
}

export default useUserAuth
