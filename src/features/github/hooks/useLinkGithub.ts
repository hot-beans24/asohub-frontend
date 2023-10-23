import { asohubApiClient, isAxiosError } from '@@/features/api/utils/apiClient'
import useAPIStatus from '@@/features/api/hooks/useAPIStatus'

import LinkGithubResBody from '@@/features/api/types/LinkGithubResBody'

/* ⭐️ GitHubアカウント紐付けフック ⭐️ */
const useLinkGithub = () => {
  const { isLoading, error, setError, apiInit, apiEnd } = useAPIStatus()

  // 🌐 GitHubアカウントを紐付け
  const linkGithub = async (githubUserID: string): Promise<boolean> => {
    apiInit()

    try {
      await asohubApiClient.post<LinkGithubResBody>('/link-github', {
        id: githubUserID,
      })

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
