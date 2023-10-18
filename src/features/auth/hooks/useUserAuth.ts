import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserState from '@@/features/auth/hooks/useUserState'

/* ⭐️ ユーザー認証情報フック ⭐️ */
const useUserAuth = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()
  const { user, setUser } = useUserState()

  const isLoggedIn = (): boolean => {
    return !!user
  }

  const fetchUserAuth = async (): Promise<void> => {
    if (user) return

    apiInit()

    type ResponseBody = {
      authenticated: boolean
      user: {
        user_id: string
        email: string
        user_name: string
        department_id: number
        grade: number
        github_username: string
        github_user_icon: string
        authenticated: boolean
        role: string
      } | null
    }

    try {
      /* 🍄 実際の処理 🍄 */
      const res = await asohubApiClient.post<ResponseBody>('/auth-status')

      /* 🔥 確認用 🔥 */
      // const res = {
      //   data: {
      //     authenticated: true,
      //     user: {
      //       user_id: '0001',
      //       email: '0000000@s.asojuku.ac.jp',
      //       user_name: 'sample user',
      //       department_id: 1,
      //       grade: 3,
      //       github_username: 'hot-beans24',
      //       github_user_icon: 'https://avatars.githubusercontent.com/u/106505475?v=4',
      //       authenticated: true,
      //       role: 'ROLE'
      //     }
      //   }
      // }

      const userData = res.data.user
      if (res.data.authenticated && userData) {
        setUser({
          id: userData.user_id,
          email: userData.email,
          name: userData.user_name,
          departmentID: userData.department_id,
          grade: userData.grade,
          githubUserID: userData.github_username,
          githubUserIcon: userData.github_user_icon,
          role: userData.role
        })
      } else {
        setUser(null)
        setError('ログインしていません')
      }
    } catch (error) {
      if (isAxiosError(error)) {
        switch (error.response?.status) {
          default: {
            setUser(null)
            setError('ユーザー認証情報取得エラー')
            console.log(error)
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
    error
  }
}

export default useUserAuth
