import { asohubApiClient, isAxiosError, HttpStatusCode } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import useUserAuth from '@@/features/auth/hooks/useUserAuth'
import useUserState from '@@/features/auth/hooks/useUserState'

import LinkGithubResBody from '@@/features/api/types/LinkGithubResBody'

/* ⭐️ GitHubアカウント紐付けフック ⭐️ */
const useLinkGithub = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  const { fetchUserAuth } = useUserAuth()
  const { user } = useUserState()

  // 🌐 GitHubアカウントを紐付け
  const linkGithub = async (githubUserID: string): Promise<boolean> => {
    apiInit()

    if (!user) return false

    try {
      await asohubApiClient.post<LinkGithubResBody>('/link-github', {
        user_id: user.id,
        github_username: githubUserID,
      })

      await fetchUserAuth({ do: true })
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
          case HttpStatusCode.Conflict: {
            setError({ key: 'linkGithubConflict', message: 'このGitHubアカウントは使用できません' })
            break
          }
          default: {
            setError({ key: 'linkGithubError', message: 'GitHub紐付け処理エラー' })
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
    isLoading,
    error,
    setError,
    linkGithub,
  }
}

export default useLinkGithub
